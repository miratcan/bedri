// worker.js - Updated with init handshake and safety checks

self.onmessage = function (e) {
  const { action, data } = e.data;
  console.log(`Worker received action: ${action}`);

  if (action === "initialize") {
    console.log("Initializing worker with image data and options.");
    // Store image data, dimensions, etc.
    self.srcWidth = data.srcWidth;
    self.srcHeight = data.srcHeight;
    self.srcBArray = data.srcBArray;
    self.options = data.options;

    // Confirm readiness to main thread
    self.postMessage({ action: "ready" });
    console.log("Worker initialized and ready.");
  } else if (action === "processLine") {
    // Check if initialized
    if (!self.srcWidth || !self.srcHeight) {
      console.warn("Worker received task before initialization.");
      return self.postMessage({
        action: "lineProcessed",
        result: { bestCandidate: null, bestFitness: -Infinity },
      });
    }

    console.log("Processing line in worker.");
    const result = processLineWorker(data);
    self.postMessage({ action: "lineProcessed", result });
    console.log("Line processed and result sent back.");
  }
};

function calcBrightness(imageData) {
  const totalPixels = self.srcWidth * self.srcHeight;
  let result = new Float32Array(totalPixels);
  for (let i = 0; i < totalPixels; i++) {
    const pixelIndex = i * 4;
    const r = imageData[pixelIndex];
    const g = imageData[pixelIndex + 1];
    const b = imageData[pixelIndex + 2];
    result[i] = 0.299 * r + 0.587 * g + 0.114 * b;
  }
  return result;
}

function calculateFitness(dstBArr) {
  let sum = 0;
  for (let i = 0; i < self.srcWidth * self.srcHeight; i++) {
    sum += Math.abs(dstBArr[i] - self.srcBArray[i]);
  }
  return self.srcWidth * self.srcHeight * 255 - sum;
}

function processLineWorker({ line, canvasData, iterations, minSize, maxSize, color }) {
  console.log(`Processing line: ${line}`);
  const canvas = new OffscreenCanvas(self.srcWidth, self.srcHeight);
  const ctx = canvas.getContext("2d");

  const imageData = new ImageData(new Uint8ClampedArray(canvasData), self.srcWidth, self.srcHeight);
  ctx.putImageData(imageData, 0, 0);

  let bestFitness = -Infinity;
  let bestCandidate = null;

  for (let i = 0; i < iterations; i++) {
    const fontSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    const x = Math.random() * self.srcWidth;
    const y = Math.random() * self.srcHeight;
    const rotation = (Math.random() * Math.PI) - (Math.PI / 2);

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const testCtx = new OffscreenCanvas(self.srcWidth, self.srcHeight).getContext("2d");
    testCtx.drawImage(canvas, 0, 0);
    testCtx.save();
    testCtx.translate(x, y);
    testCtx.rotate(rotation);
    testCtx.font = `${fontSize}px Arial`;
    testCtx.fillStyle = color;
    testCtx.textAlign = "center";
    testCtx.textBaseline = "middle";
    testCtx.fillText(line, 0, 0);

    const testData = testCtx.getImageData(0, 0, self.srcWidth, self.srcHeight);
    const dstBArr = calcBrightness(testData.data);
    const fitness = calculateFitness(dstBArr);
    testCtx.restore();

    if (fitness > bestFitness) {
      bestFitness = fitness;
      bestCandidate = { x, y, fontSize, rotation, color, line };
    }
  }

  console.log(`Best candidate for line: ${line} with fitness: ${bestFitness}`);
  return { bestCandidate, bestFitness };
}
