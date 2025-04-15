// === Full index.js ===

"use strict";

const pF = parseFloat;
const pI = parseInt;
const gebID = id => document.getElementById(id);
const mF = Math.floor;
const mR = Math.random;
const maxPixelSize = 1000000;

const randColor = () => {
  const h = Math.floor(mR() * 360); // Hue: 0-360
  const s = 10 + mR() * 90; // Saturation: 50-100%
  const l = mR() * 100; // Lightness: 0-100%
  return `hsla(${h}, ${s}%, ${l}%, ${options.opacity})`;
};

let processing = false;
let imageLoaded = false;
let lastBestFitness = 0;
let lineIndex = 0;
let linesCount = 0;

let srcWidth = null;
let srcHeight = null;
let srcBArray = null;

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

const cdtCanvas = document.createElement("canvas");
const cdtCtx = cdtCanvas.getContext("2d", { willReadFrequently: true });

const dstCanvas = gebID("dstCanvas");
const dstCtx = dstCanvas.getContext("2d", { willReadFrequently: true });

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

imgInp.addEventListener("change", handleImageUpload);
startButton.addEventListener("click", startProcessing);
stopButton.addEventListener("click", reset);
resetButton.addEventListener("click", reset);
downloadButton.addEventListener("click", downloadImage);

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

      srcCanvas.width = srcWidth;
      srcCanvas.height = srcHeight;
      dstCanvas.width = srcWidth;
      dstCanvas.height = srcHeight;
      cdtCanvas.width = srcWidth;
      cdtCanvas.height = srcHeight;
      srcCanvas.style.width = '100%'
      srcCanvas.style.height = 'auto'
      dstCanvas.style.width = '100%'
      dstCanvas.style.height = 'auto'

      srcCtx.drawImage(img, 0, 0);
      srcBArray = calcBrightness(srcCtx);
      imageLoaded = true;
      startButton.disabled = false;
      dstCtx.fillStyle = "black";
      dstCtx.fillRect(0, 0, srcWidth, srcHeight);

      console.log(`Image uploaded: ${img.width}x${img.height}`);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

function downloadImage() {
  const link = document.createElement("a");
  link.href = dstCanvas.toDataURL("image/png");
  link.download = "textdraw.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

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

    lineIndex = 0;
    linesCount = options.wordCount;
    dstCtx.fillStyle = "black";
    dstCtx.fillRect(0, 0, srcWidth, srcHeight);

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    processing = true;

    minSizeInp.disabled = true;
    maxSizeInp.disabled = true;
    opacityInp.disabled = true;
    linesInp.disabled = true;
    nofLinesInp.disabled = true;
    sRateInp.disabled = true;

    console.log('Processing started with options:', options);

    processLoop();
  }
}

function reset() {
  processing = false;
  lastBestFitness = 0;

  minSizeInp.disabled = false;
  maxSizeInp.disabled = false;
  opacityInp.disabled = false;
  linesInp.disabled = false;
  nofLinesInp.disabled = false;
  sRateInp.disabled = false;

  if (imageLoaded) {
    dstCtx.clearRect(0, 0, srcWidth, srcHeight);
    dstCtx.fillStyle = "black";
    dstCtx.fillRect(0, 0, srcWidth, srcHeight);
  }

  lineIndex = 0;
  updateProgress();
  startButton.disabled = !imageLoaded;
  stopButton.disabled = true;
  resetButton.disabled = false;

  console.log('Reset called');
}

function updateProgress() {
  const progress = lineIndex / linesCount;
  progressBar.value = progress * 100;
  const progressPercent = mF(progress * 100);
  document.title = `TextCanvas: ${progressPercent}% Complete`;

  console.log(`Progress updated: ${progressPercent}%`);
}

// === Worker Pool Implementation ===

let workerCount = navigator.hardwareConcurrency || 4;
let workers = [];
let activeTasks = 0;
let finishedTasks = 0;
let workerInitialized = false;
let options = {};

function initializeWorkerPool() {
  if (workerInitialized) return;
  workerInitialized = true;

  for (let i = 0; i < workerCount; i++) {
    const worker = new Worker("worker.js");
    worker.ready = false;

    worker.onmessage = function (e) {
      const { action, result } = e.data;

      if (action === "ready") {
        worker.ready = true;
        tryStartNextTask(worker);
        return;
      }

      if (action === "lineProcessed") {
        if (result.bestCandidate) {
          const { x, y, fontSize, rotation, color, line } = result.bestCandidate;
          dstCtx.save();
          dstCtx.translate(x, y);
          dstCtx.rotate(rotation);
          dstCtx.font = `${fontSize}px Arial`;
          dstCtx.fillStyle = color;
          dstCtx.textAlign = "center";
          dstCtx.textBaseline = "middle";
          dstCtx.fillText(line, 0, 0);
          dstCtx.restore();
          lastBestFitness = result.bestFitness;
        }

        lineIndex++;
        finishedTasks++;
        updateProgress();
        activeTasks--;

        if (processing && lineIndex < linesCount) {
          tryStartNextTask(worker);
        } else if (!processing || finishedTasks >= linesCount) {
          processing = false;
          startButton.disabled = false;
          stopButton.disabled = true;
          resetButton.disabled = false;
        }
      }
    };

    workers.push(worker);

    worker.postMessage({
      action: "initialize",
      data: {
        srcWidth,
        srcHeight,
        srcBArray,
        options,
      },
    });

    console.log(`Worker ${i} initialized`);
  }
}

function tryStartNextTask(worker) {
  if (!worker.ready || !processing || lineIndex >= linesCount) return;
  assignTask(worker);
}

function assignTask(worker) {
  const line = options.lines[mF(mR() * options.lines.length)];
  const imageData = dstCtx.getImageData(0, 0, srcWidth, srcHeight);

  worker.postMessage(
    {
      action: "processLine",
      data: {
        line,
        canvasData: imageData.data.buffer,
        iterations: options.iterations,
        minSize: options.minSize,
        maxSize: options.maxSize,
        color: randColor(),
      },
    },
    [imageData.data.buffer]
  );

  activeTasks++;

  console.log(`Task assigned to worker with line: ${line}`);
}

function processLoop() {
  if (!processing) return;
  initializeWorkerPool();
} 
