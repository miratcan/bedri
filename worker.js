// worker.js - Optimized for batch processing with better memory management

// Worker global state
let srcWidth, srcHeight, srcBArray, options;
let sharedImageData; // For SharedArrayBuffer implementation if available

self.onmessage = function (e) {
  const { action, data } = e.data;
  console.log(`Worker received action: ${action}`);

  if (action === "initialize") {
    console.log("Initializing worker with image data and options.");
    // Store image data, dimensions, etc.
    srcWidth = data.srcWidth;
    srcHeight = data.srcHeight;
    srcBArray = data.srcBArray;
    options = data.options;
    
    // Set up shared buffer if provided
    if (data.sharedBuffer) {
      sharedImageData = new Uint8ClampedArray(data.sharedBuffer);
      console.log("Worker using SharedArrayBuffer");
    }

    // Confirm readiness to main thread
    self.postMessage({ action: "ready" });
    console.log("Worker initialized and ready.");
  } 
  else if (action === "processBatch") {
    // Check if initialized
    if (!srcWidth || !srcHeight) {
      console.warn("Worker received task before initialization.");
      return self.postMessage({
        action: "batchProcessed",
        result: [],
        batchInfo: data.batchInfo
      });
    }

    console.log(`Processing batch of ${data.lines.length} lines in worker.`);
    const results = processBatchWorker(data);
    self.postMessage({ 
      action: "batchProcessed", 
      result: results,
      batchInfo: data.batchInfo
    });
    console.log("Batch processed and results sent back.");
  }
};

function calcBrightness(imageData) {
  const totalPixels = srcWidth * srcHeight;
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
  for (let i = 0; i < srcWidth * srcHeight; i++) {
    sum += Math.abs(dstBArr[i] - srcBArray[i]);
  }
  return srcWidth * srcHeight * 255 - sum;
}

function processBatchWorker({ lines, canvasData, iterations, minSize, maxSize, colors }) {
  const canvas = new OffscreenCanvas(srcWidth, srcHeight);
  const ctx = canvas.getContext("2d");

  // Create image data from the buffer
  const imageData = new ImageData(new Uint8ClampedArray(canvasData), srcWidth, srcHeight);
  ctx.putImageData(imageData, 0, 0);
  
  const results = [];
  
  // Process each line in the batch
  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const line = lines[lineIdx];
    let bestFitness = -Infinity;
    let bestCandidate = null;
    const color = colors[lineIdx];

    for (let i = 0; i < iterations; i++) {
      const fontSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
      const x = Math.random() * srcWidth;
      const y = Math.random() * srcHeight;
      const rotation = (Math.random() * Math.PI) - (Math.PI / 2);

      // Create a temporary canvas for testing
      const testCanvas = new OffscreenCanvas(srcWidth, srcHeight);
      const testCtx = testCanvas.getContext("2d");
      
      // Copy current state
      testCtx.drawImage(canvas, 0, 0);
      
      // Apply text
      testCtx.save();
      testCtx.translate(x, y);
      testCtx.rotate(rotation);
      testCtx.font = `bold ${fontSize}px Arial`;
      testCtx.fillStyle = color;
      testCtx.textAlign = "center";
      testCtx.textBaseline = "middle";
      testCtx.fillText(line, 0, 0);
      testCtx.restore();
      
      // Get image data and calculate fitness
      const testData = testCtx.getImageData(0, 0, srcWidth, srcHeight);
      const dstBArr = calcBrightness(testData.data);
      const fitness = calculateFitness(dstBArr);

      if (fitness > bestFitness) {
        bestFitness = fitness;
        bestCandidate = { x, y, fontSize, rotation, color, line };
      }
    }
    
    if (bestCandidate) {
      results.push({ bestCandidate, bestFitness });
      
      // Apply the best candidate to our working canvas for the next iteration
      ctx.save();
      ctx.translate(bestCandidate.x, bestCandidate.y);
      ctx.rotate(bestCandidate.rotation);
      ctx.shadowColor = "black";
      ctx.shadowBlur = 10;
      ctx.font = `${bestCandidate.fontSize}px Arial`;
      ctx.fillStyle = bestCandidate.color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(bestCandidate.line, 0, 0);
      ctx.restore();
    }
  }
  
  return results;
}