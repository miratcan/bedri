"use strict";

// NOTES:
// DON'T USE ANY FORMATTERS HERE.

// Shortcuts

const pF = parseFloat;
const pI = parseInt;
const gebID = id => document.getElementById(id);
const mF = Math.floor;
const mR = Math.random;
const maxPixelSize = 1000000; // 1 megapixel (1000 x 1000)
const randColor = () => [
    mF(mR() * 256),
    mF(mR() * 256),
    mF(mR() * 256)
]

// Processing state flags
let processing = false; // Whether processing is currently running
let imageLoaded = false; // Whether an image has been loaded
let lastBestFitness = 0; // Track fitness of last best placement

// Cache for fitness calculations to improve performance
const fitnessCache = new Map();

// Processing progress tracking
let lineIndex = 0; // Current word being processed
let linesCount = 0; // Total number of words to process

// Animation and timing
let animationFrameId = null; // ID of the current animation frame
let wordsPerFrame = 1; // Number of words to process per animation frame

// Image data storage
let srcWidth = null;
let srcHeight = null;
let srcBArray= null; // Brightness array of source.

const linesInp    = gebID("lines");
const minSizeInp  = gebID("minSize");
const maxSizeInp  = gebID("maxSize");
const opacityInp  = gebID("opacity");
const iterInp     = gebID("iterations");
const nofLinesInp = gebID("nofLines");
const sRateInp    = gebID("sampleRate");

function readOptions() {
  return {
    lines:      linesInp.value.trim().split(/\n+/), // Lines to use from input
    minSize:    pI(minSizeInp.value), // Minimum font size
    maxSize:    pI(maxSizeInp.value), // Maximum font size
    opacity:    pF(opacityInp.value), // Word opacity
    sRate:      pI(sRateInp.value), // Sample rate
    iterations: pI(iterInp.value), // Number of placement attempts per word
    wordCount:  pI(nofLinesInp.value || 2500), // Total number of words to place
  };
}

// Processing parameters (stored when processing starts)
let options = readOptions();

// Get DOM elements
const imageInput = gebID("imageInput");

// Buttons
const startButton = gebID("startButton");
const stopButton  = gebID("stopButton");
const resetButton = gebID("resetButton");
const downlButton = gebID("downlButton");
const progressBar = gebID("progress");

// Initialize canvases
const srcCanvas = gebID("srcCanvas");
const srcCtx = srcCanvas.getContext("2d", { willReadFrequently: true });
const srcInfo = gebID("srcInfo");

const cdtCanvas = document.createElement("canvas");
const cdtCtx = cdtCanvas.getContext("2d", { willReadFrequently: true });

const dstCanvas = gebID("dstCanvas");
const dstCtx = dstCanvas.getContext("2d", { willReadFrequently: true });

// Event listeners
imageInput.addEventListener("change", handleImageUpload);
startButton.addEventListener("click", startProcessing);
stopButton.addEventListener("click", reset);
resetButton.addEventListener("click", reset);
downlButton.addEventListener("click", downloadImage);

function downloadImage(e) {
  const link = document.createElement("a");
  const dataURL = dstCanvas.toDataURL("image/png");
  link.href = dataURL;
  link.download = "wordcanvas.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function calcBrightness(ctx){
  let pixelData = ctx.getImageData(0, 0, srcWidth, srcHeight).data;
  const totalPixels = srcWidth * srcHeight;
  let result = new Float32Array(totalPixels);
  for (let i = 0; i < totalPixels; i++) {
    const pixelIndex = i * 4; // RGBA values for each pixel
    const r = pixelData[pixelIndex];
    const g = pixelData[pixelIndex + 1];
    const b = pixelData[pixelIndex + 2];
    result[i] = 0.299 * r + 0.587 * g + 0.114 * b;
  }
  return result
}

// Handle image upload
function handleImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  // Reset everything first

  const reader = new FileReader();

  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      // Check image dimensions
      if (img.width * img.height > maxPixelSize) {
        alert(
          `Warning: Image dimensions (${img.width}x${img.height}) are very large. The app will run extremely slow with images of this size. Consider using a smaller image for better performance.`
        );
      }

      // Display dimensions
      srcInfo.textContent = `Dimensions: ${img.width} × ${img.height} pixels`;

      // Set canvas dimensions
      srcWidth = img.width;
      srcHeight = img.height;

      try {
        // Setup all canvases with same dimensions
        srcCanvas.width = srcWidth;
        srcCanvas.height = srcHeight;
        dstCanvas.width = srcWidth;
        dstCanvas.height = srcHeight;
        cdtCanvas.width = srcWidth;
        cdtCanvas.height = srcHeight;

        // Draw original image to hidden canvas
        srcCtx.drawImage(img, 0, 0);

        // Calculate brightness array
        srcBArray = calcBrightness(srcCtx);
  
        // Mark image as loaded
        imageLoaded = true;

        // Enable start button
        startButton.disabled = false;

        // Clear result canvas with appropriate background
        dstCtx.fillStyle = "black";
        dstCtx.fillRect(0, 0, srcWidth, srcHeight);
      } catch (error) {
        console.error("Error processing image:", error);
        alert("Error processing image. Please try a different image.");
        reset();
      }
    };
    img.onerror = function () {
      alert("Error loading image. Please try a different image.");
      reset();
    };
    img.src = event.target.result;
  };
  reader.onerror = function () {
    alert("Error reading file. Please try again.");
    reset();
  };

  reader.readAsDataURL(file);
}

// Start processing
function startProcessing() {
  if (!imageLoaded) {
    alert("Please upload an image first.");
    return;
  }

  if (!processing) {
    // Store processing parameters
    options = readOptions();

    // Validate parameters
    if (options.minSize >= options.maxSize) {
      alert("Minimum font size must be less than maximum font size.");
      return;
    }

    // Initialize
    lineIndex = 0;
    linesCount = options.wordCount;

    // Clear result canvas
    dstCtx.fillStyle = "black";
    dstCtx.fillRect(0, 0, srcWidth, srcHeight);

    // Update UI
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;

    processing = true;

    // Disable input controls
    minSizeInp.disabled = true;
    maxSizeInp.disabled = true;
    opacityInp.disabled = true;
    linesInp.disabled = true;
    nofLinesInp.disabled = true;
    sRateInp.disabled = true;

    // Start processing loop
    processLoop();
  }
}

// Reset everything
function reset() {

  // Stop processing
  processing = false;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  // Clear all caches
  fitnessCache.clear();
  lastBestFitness = 0;

  // Enable input controls
  minSizeInp.disabled = false;
  maxSizeInp.disabled = false;
  opacityInp.disabled = false;
  linesInp.disabled = false;
  nofLinesInp.disabled = false;
  sRateInp.disabled = false;

  // Clear canvases
  if (imageLoaded) {
    try {
      dstCtx.clearRect(0, 0, srcWidth, srcHeight);
      dstCtx.fillStyle = "black";
      dstCtx.fillRect(0, 0, srcWidth, srcHeight);
    } catch (error) {
      console.error("Error clearing canvas:", error);
    }
  }

  // Reset UI
  lineIndex = 0;
  updateProgress();
  startButton.disabled = !imageLoaded;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

// Main processing loop
function processLoop() {
  if (!processing) return;
  if (lineIndex < linesCount) {
    // Process multiple words per frame
    for (let i = 0; i < wordsPerFrame && lineIndex < linesCount; i++) {
      processWord();
      updateProgress();
    }
    animationFrameId = requestAnimationFrame(processLoop);
  } else {
    processing = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
  }
}

// Process a word
function processWord() {
  lineIndex++;

  // Select a random word
  const word = options.lines[mF(mR() * options.lines.length)];
  
  // Copy current destination canvas to candidate canvas
  cdtCtx.drawImage(dstCanvas, 0, 0);
  
  let bestFitness = -Infinity;
  let bestCandidate = null;
  
  // Try multiple iterations to find the best placement
  for (let i = 0; i < options.iterations; i++) {
    // Reset candidate canvas for each iteration is not needed here
    // as we use save/restore pattern instead
    
    // Generate random parameters
    const fontSize = mF(mR() * (options.maxSize - options.minSize + 1)) + options.minSize;
    const x = mR() * srcWidth;
    const y = mR() * srcHeight;
    const rotation = mR() * Math.PI * 2; // Random rotation between 0 and 2π
    
    // Random color based on brightness of the source image
    const [r, g, b] = randColor()
    const color = `rgba(${r}, ${g}, ${b}, ${options.opacity})`;
    
    cdtCtx.save();
    cdtCtx.translate(x, y);
    cdtCtx.rotate(rotation);
    cdtCtx.font = `${fontSize}px Arial`;
    cdtCtx.fillStyle = color;
    cdtCtx.textAlign = "center";
    cdtCtx.textBaseline = "middle";
    cdtCtx.fillText(word, 0, 0);
    const fitness = calculateFitness(cdtCtx);
    cdtCtx.restore();

    // Update best if this placement is better
    if (fitness > bestFitness) {
      bestFitness = fitness;
      console.log({bestFitness})
      bestCandidate = { x, y, fontSize, rotation, color, word };
    }
  }
  
  // Apply the best placement to the destination canvas
  if (bestCandidate) {
    dstCtx.save();
    dstCtx.translate(bestCandidate.x, bestCandidate.y);
    dstCtx.rotate(bestCandidate.rotation);
    dstCtx.font = `${bestCandidate.fontSize}px Arial`;
    dstCtx.fillStyle = bestCandidate.color;
    dstCtx.textAlign = "center";
    dstCtx.textBaseline = "middle";
    dstCtx.fillText(bestCandidate.word, 0, 0);
    dstCtx.restore();
    lastBestFitness = bestFitness;
  }
}

// Calculate fitness of word placement
function calculateFitness(cdtCtx) {
  const dstBArr = calcBrightness(cdtCtx);
  let sum = 0;
  for (let i = 0; i < srcWidth * srcHeight; i++) {
    sum += Math.abs(dstBArr[i] - srcBArray[i]);
  }
  return (srcWidth * srcHeight * 255) - sum;
}

// Update progress display
function updateProgress() {
  // Update progress bar
  const progress = lineIndex / linesCount;
  progressBar.value = progress * 100;
  // Update document title to show progress
  const progressPercent = Math.floor(progress * 100);
  document.title = `WordCanvas: ${progressPercent}% Complete`;
}
