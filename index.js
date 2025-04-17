// index.js - Optimized with batch processing

"use strict";

const pF = parseFloat;
const pI = parseInt;
const gebID = id => document.getElementById(id);
const mF = Math.floor;
const mR = Math.random;
const maxPixelSize = 1000000;

const randColor = () => {
  const h = Math.floor(mR() * 360); // Hue: 0-360
  const s = 10 + mR() * 90; // Saturation: 10-100%
  const l = mR() * 100; // Lightness: 0-100%
  return `hsla(${h}, ${s}%, ${l}%, ${options.opacity})`;
};

// Application state
let processing = false;
let imageLoaded = false;
let lastBestFitness = 0;
let totalProcessed = 0;
let linesCount = 0;
let options = {};

// Image data
let srcWidth = null;
let srcHeight = null;
let srcBArray = null;

// DOM elements
const imgInp = gebID("imageInput");
const linesInp = gebID("lines");
const minSizeInp = gebID("minSize");
const maxSizeInp = gebID("maxSize");
const opacityInp = gebID("opacity");
const iterInp = gebID("iterations");
const nofLinesInp = gebID("nofLines");
const sRateInp = gebID("sampleRate");

const startButton = gebID("startButton");
const stopButton = gebID("stopButton");
const resetButton = gebID("resetButton");
const downloadButton = gebID("downloadButton");
const progressBar = gebID("progress");

const srcCanvas = gebID("srcCanvas");
const srcCtx = srcCanvas.getContext("2d", { willReadFrequently: true });
const srcInfo = gebID("srcInfo");

const dstCanvas = gebID("dstCanvas");
const dstCtx = dstCanvas.getContext("2d", { willReadFrequently: true });

// Worker configuration
const BATCH_SIZE = 5; // Process 5 lines per worker task
const MAX_ACTIVE_WORKERS = navigator.hardwareConcurrency || 4;
let workers = [];
let activeWorkers = 0;
let workerInitialized = false;
let pendingTasks = [];
let sharedBuffer = null;

// Read options from UI
function readOptions() {
  return {
    lines: linesInp.value.trim().split(/\n+/),
    minSize: pI(minSizeInp.value),
    maxSize: pI(maxSizeInp.value),
    opacity: pF(opacityInp.value),
    iterations: pI(iterInp.value),
    wordCount: pI(nofLinesInp.value || 2500)
  };
}

// Calculate image brightness array
function calcBrightness(ctx) {
  const pixelData = ctx.getImageData(0, 0, srcWidth, srcHeight).data;
  const totalPixels = srcWidth * srcHeight;
  let result = new Float32Array(totalPixels);
  for (let i = 0; i < totalPixels; i++) {
    const pixelIndex = i * 4;
    const r = pixelData[pixelIndex];
    const g = pixelData[pixelIndex + 1];
    const b = pixelData[pixelIndex + 2];
    result[i] = 0.299 * r + 0.587 * g + 0.114 * b;
  }
  return result;
}

// Event listeners
imgInp.addEventListener("change", handleImageUpload);
startButton.addEventListener("click", startProcessing);
stopButton.addEventListener("click", stopProcessing);
resetButton.addEventListener("click", reset);
downloadButton.addEventListener("click", downloadImage);

// Handle image upload
function handleImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      if (img.width * img.height > maxPixelSize) {
        alert(`Warning: Image dimensions (${img.width}x${img.height}) are large.`);
      }

      srcInfo.textContent = `Dimensions: ${img.width} × ${img.height} pixels`;
      srcWidth = img.width;
      srcHeight = img.height;

      // Set up canvases
      srcCanvas.width = srcWidth;
      srcCanvas.height = srcHeight;
      dstCanvas.width = srcWidth;
      dstCanvas.height = srcHeight;
      
      srcCanvas.style.width = '100%';
      srcCanvas.style.height = 'auto';
      dstCanvas.style.width = '100%';
      dstCanvas.style.height = 'auto';

      // Draw original image
      srcCtx.drawImage(img, 0, 0);
      srcBArray = calcBrightness(srcCtx);
      
      // Create shared buffer for worker communication if supported
      try {
        sharedBuffer = new SharedArrayBuffer(srcWidth * srcHeight * 4);
        console.log("Using SharedArrayBuffer for better performance");
      } catch (e) {
        console.log("SharedArrayBuffer not supported in this browser");
        sharedBuffer = null;
      }
      
      // Initialize UI
      imageLoaded = true;
      startButton.disabled = false;
      dstCtx.fillStyle = "black";
      dstCtx.fillRect(0, 0, srcWidth, srcHeight);

      console.log(`Image uploaded: ${img.width}x${img.height}`);
      
      // Pre-initialize workers
      destroyWorkers();
      workerInitialized = false;
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

// Download the generated image
function downloadImage() {
  const link = document.createElement("a");
  link.href = dstCanvas.toDataURL("image/png");
  link.download = "textdraw.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Start processing the image
function startProcessing() {
  if (!imageLoaded) {
    alert("Please upload an image first.");
    return;
  }

  if (!processing) {
    options = readOptions();
    if (options.minSize >= options.maxSize) {
      alert("Minimum font size must be less than maximum font size.");
      return;
    }

    totalProcessed = 0;
    linesCount = options.wordCount;
    pendingTasks = [];
    
    // Clear destination canvas
    dstCtx.fillStyle = "black";
    dstCtx.fillRect(0, 0, srcWidth, srcHeight);

    // Update UI state
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    processing = true;

    // Disable inputs during processing
    toggleInputs(true);

    console.log('Processing started with options:', options);
    
    // Initialize worker pool and start processing
    initializeWorkerPool();
  }
}

// Stop processing
function stopProcessing() {
  processing = false;
  pendingTasks = [];
  console.log('Processing stopped');
  
  // Update UI only if all workers finished
  if (activeWorkers === 0) {
    completeProcessing();
  }
}

// Reset everything
function reset() {
  processing = false;
  lastBestFitness = 0;
  pendingTasks = [];
  
  // Re-enable UI controls
  toggleInputs(false);

  if (imageLoaded) {
    dstCtx.clearRect(0, 0, srcWidth, srcHeight);
    dstCtx.fillStyle = "black";
    dstCtx.fillRect(0, 0, srcWidth, srcHeight);
  }

  totalProcessed = 0;
  updateProgress();
  startButton.disabled = !imageLoaded;
  stopButton.disabled = true;
  resetButton.disabled = false;

  console.log('Reset called');
}

// Enable/disable all input elements
function toggleInputs(disabled) {
  minSizeInp.disabled = disabled;
  maxSizeInp.disabled = disabled;
  opacityInp.disabled = disabled;
  linesInp.disabled = disabled;
  nofLinesInp.disabled = disabled;
  sRateInp.disabled = disabled;
}

// Update progress bar
function updateProgress() {
  const progress = totalProcessed / linesCount;
  progressBar.value = progress * 100;
  const progressPercent = mF(progress * 100);
  document.title = `TextCanvas: ${progressPercent}% Complete`;
}

// Create and initialize worker pool
function initializeWorkerPool() {
  if (workerInitialized) {
    console.log("Worker pool already initialized, starting tasks...");
    startBatchProcessing();
    return;
  }
  
  workerInitialized = true;
  workers = [];
  activeWorkers = 0;
  let readyCount = 0;

  // Create workers
  for (let i = 0; i < MAX_ACTIVE_WORKERS; i++) {
    const worker = new Worker("worker.js");
    worker.ready = false;
    worker.busy = false;
    worker.id = i;

    worker.onmessage = function (e) {
      const { action, result, batchInfo } = e.data;

      if (action === "ready") {
        worker.ready = true;
        readyCount++;
        
        // When all workers are ready, start processing
        if (readyCount === MAX_ACTIVE_WORKERS) {
          console.log("All workers ready, starting batch processing");
          startBatchProcessing();
        }
      } 
      else if (action === "batchProcessed") {
        worker.busy = false;
        activeWorkers--;
        
        // Apply results if processing is still active
        if (processing && result && result.length > 0) {
          // Use requestAnimationFrame for smoother UI updates
          requestAnimationFrame(() => {
            applyBatchResults(result);
          });
        }

        // Check if we need to queue more work or finish
        if (processing && (totalProcessed < linesCount || pendingTasks.length > 0)) {
          assignTaskToWorker(worker);
        } 
        else if (!processing || totalProcessed >= linesCount) {
          if (activeWorkers === 0) {
            completeProcessing();
          }
        }
      }
    };

    worker.onerror = function(error) {
      console.error(`Worker ${i} error:`, error);
      worker.busy = false;
      activeWorkers--;
      
      // Handle worker errors gracefully
      if (activeWorkers === 0 && !processing) {
        completeProcessing();
      }
    };

    workers.push(worker);

    // Initialize worker with image data
    worker.postMessage({
      action: "initialize",
      data: {
        srcWidth,
        srcHeight,
        srcBArray,
        sharedBuffer,
        options,
      },
    });

    console.log(`Worker ${i} initialized`);
  }
}

// Apply results from a batch
function applyBatchResults(results) {
  for (const item of results) {
    if (item.bestCandidate) {
      const { x, y, fontSize, rotation, color, line } = item.bestCandidate;
      
      dstCtx.save();
      dstCtx.translate(x, y);
      dstCtx.rotate(rotation);
      dstCtx.font = `${fontSize}px Arial`;
      dstCtx.fillStyle = color;
      dstCtx.textAlign = "center";
      dstCtx.textBaseline = "middle";
      dstCtx.fillText(line, 0, 0);
      dstCtx.restore();
      
      lastBestFitness = item.bestFitness;
    }
    
    totalProcessed++;
  }
  
  // Update progress every batch
  updateProgress();
}

// Start batch processing by assigning tasks to all workers
function startBatchProcessing() {
  console.log("Starting batch processing...");
  
  // Generate initial task queue
  generatePendingTasks();
  
  // Assign tasks to all available workers
  for (const worker of workers) {
    if (worker.ready && !worker.busy && pendingTasks.length > 0) {
      assignTaskToWorker(worker);
    }
  }
}

// Generate pending tasks
function generatePendingTasks() {
  // Clear existing pending tasks
  pendingTasks = [];
  
  // Calculate how many tasks we need
  const totalTasks = Math.ceil((linesCount - totalProcessed) / BATCH_SIZE);
  let remainingLines = linesCount - totalProcessed;
  
  for (let i = 0; i < totalTasks; i++) {
    const batchSize = Math.min(BATCH_SIZE, remainingLines);
    const lines = [];
    const colors = [];
    
    // Generate lines and colors for this batch
    for (let j = 0; j < batchSize; j++) {
      lines.push(options.lines[mF(mR() * options.lines.length)]);
      colors.push(randColor());
    }
    
    pendingTasks.push({
      lines,
      colors,
      batchInfo: {
        batchId: i,
        startIndex: totalProcessed + (i * BATCH_SIZE)
      }
    });
    
    remainingLines -= batchSize;
  }
  
  console.log(`Generated ${pendingTasks.length} pending tasks`);
}

// Assign a task to a worker
function assignTaskToWorker(worker) {
  if (!worker.ready || worker.busy || pendingTasks.length === 0) {
    return;
  }
  
  const task = pendingTasks.shift();
  if (!task) return;
  
  worker.busy = true;
  activeWorkers++;
  
  // Get current canvas state
  const imageData = dstCtx.getImageData(0, 0, srcWidth, srcHeight);
  
  worker.postMessage(
    {
      action: "processBatch",
      data: {
        lines: task.lines,
        colors: task.colors,
        canvasData: imageData.data.buffer,
        iterations: options.iterations,
        minSize: options.minSize,
        maxSize: options.maxSize,
        batchInfo: task.batchInfo
      },
    },
    [imageData.data.buffer] // Transfer ownership of the buffer
  );
  
  console.log(`Batch of ${task.lines.length} lines assigned to worker ${worker.id}`);
}

// Complete processing and reset UI
function completeProcessing() {
  console.log("Processing complete");
  processing = false;
  
  // Update UI
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  
  // Re-enable inputs
  toggleInputs(false);
}

// Clean up workers when no longer needed
function destroyWorkers() {
  for (const worker of workers) {
    worker.terminate();
  }
  workers = [];
  activeWorkers = 0;
}

// Handle page unload
window.addEventListener('beforeunload', destroyWorkers);