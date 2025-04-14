// Global variables

// Canvas for storing the original input image
// Used to calculate brightness values and compare with results
let origCanvas, origCtx;

// Main canvas that displays the final result
// This is the visible canvas in the UI
let resultCanvas, resultCtx;

// Temporary canvas used for testing word placements
// Used to calculate fitness without modifying the result canvas
let candidateCanvas, candidateCtx;

// Dimensions of the input image
let imageWidth, imageHeight;

// Processing state flags
let processing = false;  // Whether processing is currently running
let paused = false;      // Whether processing is paused
let imageLoaded = false; // Whether an image has been loaded

// Processing progress tracking
let wordIndex = 0;       // Current word being processed
let wordCount = 0;       // Total number of words to process

// Animation and timing
let animationFrameId = null; // ID of the current animation frame

// Image data storage
let inputImageData = null;    // Raw pixel data of the input image
let sourceBrightnessArr = null; // Array of brightness values for each pixel

// Caches for performance optimization
let wordMetricsCache = new Map(); // Cache for word dimensions at different sizes
let fitnessCache = new Map();     // Cache for fitness calculations
let lastBestFitness = 0;          // Best fitness value found so far

// Processing configuration
let wordsPerFrame = 20;    // Number of words to process per animation frame
let sampleRate = 8;        // Pixel sampling rate for fitness calculation
let maxIterations = 50;    // Maximum iterations per word placement
let skipThreshold = 20;    // Brightness difference threshold for skipping pixels
let maxImageSize = 2000;   // Maximum allowed image dimension
let maxCacheSize = 1000;   // Maximum number of cached word metrics

// Processing parameters (stored when processing starts)
let processingParams = {
    minSize: 0,     // Minimum font size
    maxSize: 0,     // Maximum font size
    opacity: 0,     // Word opacity
    useColor: false // Whether to use color mode
};

// Get DOM elements
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const wordListInput = document.getElementById('wordList');
const minSizeInput = document.getElementById('minSize');
const maxSizeInput = document.getElementById('maxSize');
const opacityInput = document.getElementById('opacity');
const useColorInput = document.getElementById('useColor');
const iterationsInput = document.getElementById('iterations');
const nofWordsInput = document.getElementById('nofWords');
const startButton = document.getElementById('startButton');
const stopContinueButton = document.getElementById('stopContinueButton');
const stepButton = document.getElementById('stepButton');
const resetButton = document.getElementById('resetButton');
const resultCanvasElement = document.getElementById('resultCanvas');
const progressBar = document.getElementById('progressBar');
const downloadButton = document.getElementById('downloadButton');

// Initialize canvases
origCanvas = document.createElement('canvas');
origCtx = origCanvas.getContext('2d', { willReadFrequently: true });

resultCanvas = resultCanvasElement;
resultCtx = resultCanvas.getContext('2d', {willReadFrequently: true});

candidateCanvas = document.createElement('canvas');
candidateCtx = candidateCanvas.getContext('2d', { willReadFrequently: true });

// Event listeners
imageInput.addEventListener('change', handleImageUpload);
startButton.addEventListener('click', startProcessing);
stopContinueButton.addEventListener('click', togglePause);
stepButton.addEventListener('click', processStep);
resetButton.addEventListener('click', reset);
downloadButton.addEventListener('click', downloadImage);

// Handle image upload
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    // Reset everything first
    reset();
    
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            // Check image dimensions
            if (img.width > maxImageSize || img.height > maxImageSize) {
                alert(`Image dimensions (${img.width}x${img.height}) exceed maximum allowed size of ${maxImageSize}x${maxImageSize} pixels.`);
                return;
            }

            // Display preview
            imagePreview.src = img.src;
            imagePreview.style.display = 'inline-block';
            
            // Display dimensions
            const dimensionsDiv = document.getElementById('imageDimensions');
            dimensionsDiv.textContent = `Dimensions: ${img.width} × ${img.height} pixels`;
            
            // Set canvas dimensions
            imageWidth = img.width;
            imageHeight = img.height;
            
            // Adjust sample rate based on image size
            sampleRate = Math.max(4, Math.floor(Math.sqrt(imageWidth * imageHeight) / 100));
            
            try {
                // Setup all canvases with same dimensions
                origCanvas.width = imageWidth;
                origCanvas.height = imageHeight;
                resultCanvas.width = imageWidth;
                resultCanvas.height = imageHeight;
                candidateCanvas.width = imageWidth;
                candidateCanvas.height = imageHeight;
                
                // Draw original image to hidden canvas
                origCtx.drawImage(img, 0, 0);
                
                // Store the input image data
                inputImageData = origCtx.getImageData(0, 0, imageWidth, imageHeight);
                
                // Calculate brightness array
                calculateOriginalBrightness();
                
                // Mark image as loaded
                imageLoaded = true;
                
                // Enable start button
                startButton.disabled = false;
                
                // Clear result canvas with appropriate background
                resultCtx.fillStyle = 'black';
                resultCtx.fillRect(0, 0, imageWidth, imageHeight);
            } catch (error) {
                console.error('Error processing image:', error);
                alert('Error processing image. Please try a different image.');
                reset();
            }
        };
        
        img.onerror = function() {
            alert('Error loading image. Please try a different image.');
            reset();
        };
        
        img.src = event.target.result;
    };
    
    reader.onerror = function() {
        alert('Error reading file. Please try again.');
        reset();
    };
    
    reader.readAsDataURL(file);
}

// Calculate brightness values from input image
function calculateOriginalBrightness() {
    const pixelData = inputImageData.data;
    const totalPixels = imageWidth * imageHeight;
    sourceBrightnessArr = new Float32Array(totalPixels);
    for (let i = 0; i < totalPixels; i++) {
        const pixelIndex = i * 4; // RGBA values for each pixel
        const r = pixelData[pixelIndex];
        const g = pixelData[pixelIndex + 1];
        const b = pixelData[pixelIndex + 2];
        sourceBrightnessArr[i] = 0.299 * r + 0.587 * g + 0.114 * b;
    }
}

// Start processing
function startProcessing() {
    if (!imageLoaded) {
        alert('Please upload an image first.');
        return;
    }
    
    if (processing && !paused) return;
    
    if (!processing) {
        // Store processing parameters
        processingParams = {
            minSize: parseInt(minSizeInput.value),
            maxSize: parseInt(maxSizeInput.value),
            opacity: parseFloat(opacityInput.value),
            useColor: useColorInput.checked
        };
        
        // Validate parameters
        if (processingParams.minSize >= processingParams.maxSize) {
            alert('Minimum font size must be less than maximum font size.');
            return;
        }
        
        // Initialize
        wordIndex = 0;
        wordCount = parseInt(nofWordsInput.value);
        
        // Clear result canvas
        resultCtx.fillStyle = 'black';
        resultCtx.fillRect(0, 0, imageWidth, imageHeight);
        
        // Update UI
        startButton.disabled = true;
        stopContinueButton.disabled = false;
        stepButton.disabled = false;
        processing = true;
        paused = false;
        stopContinueButton.textContent = 'Stop';
        
        // Disable input controls
        minSizeInput.disabled = true;
        maxSizeInput.disabled = true;
        opacityInput.disabled = true;
        useColorInput.disabled = true;
        wordListInput.disabled = true;
        nofWordsInput.disabled = true;
        
        // Start processing loop
        processLoop();
    } else if (paused) {
        // Resume processing
        paused = false;
        stopContinueButton.textContent = 'Stop';
        processLoop();
    }
}

// Toggle pause state
function togglePause() {
    if (!processing) return;
    
    paused = !paused;
    stopContinueButton.textContent = paused ? 'Continue' : 'Stop';
    
    if (!paused) {
        processLoop();
    } else {
        cancelAnimationFrame(animationFrameId);
    }
}

// Process a single step
function processStep() {
    if (!imageLoaded) {
        alert('Please upload an image first.');
        return;
    }
    
    if (!processing) {
        // Initialize if not already processing
        wordIndex = 0;
        wordCount = parseInt(nofWordsInput.value);
        
        // Clear result canvas
        resultCtx.fillStyle = 'black';
        resultCtx.fillRect(0, 0, imageWidth, imageHeight);
        
        processing = true;
        paused = true;
        startButton.disabled = true;
        stopContinueButton.disabled = false;
        stepButton.disabled = false;
        stopContinueButton.textContent = 'Continue';
    }
    
    if (wordIndex < wordCount) {
        processWord();
        updateProgress();
    }
}

// Reset everything
function reset() {
    // Stop processing
    processing = false;
    paused = false;
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    
    // Clear all caches
    wordMetricsCache.clear();
    fitnessCache.clear();
    lastBestFitness = 0;
    inputImageData = null;
    sourceBrightnessArr = null;
    
    // Enable input controls
    minSizeInput.disabled = false;
    maxSizeInput.disabled = false;
    opacityInput.disabled = false;
    useColorInput.disabled = false;
    wordListInput.disabled = false;
    nofWordsInput.disabled = false;
    
    // Clear canvases
    if (imageLoaded) {
        try {
            resultCtx.clearRect(0, 0, imageWidth, imageHeight);
            resultCtx.fillStyle = 'black';
            resultCtx.fillRect(0, 0, imageWidth, imageHeight);
        } catch (error) {
            console.error('Error clearing canvas:', error);
        }
    }
    
    // Reset UI
    wordIndex = 0;
    updateProgress();
    startButton.disabled = !imageLoaded;
    stopContinueButton.disabled = true;
    stepButton.disabled = true;
    stopContinueButton.textContent = 'Stop';
}

// Main processing loop
function processLoop() {
    if (!processing || paused) return;
    
    if (wordIndex < wordCount) {
        // Process multiple words per frame
        for (let i = 0; i < wordsPerFrame && wordIndex < wordCount; i++) {
            processWord();
            updateProgress();
        }
        animationFrameId = requestAnimationFrame(processLoop);
    } else {
        processing = false;
        startButton.disabled = true;
        stopContinueButton.disabled = true;
        stepButton.disabled = true;
    }
}

// Process a single word
function processWord() {
    // Get words from textarea
    const wordList = wordListInput.value.trim().split('\n').filter(line => line.trim().length > 0);
    if (wordList.length === 0) return;
    
    // Initialize candidates array
    const candidates = [];
    
    // Cache the current result canvas state
    const currentState = resultCtx.getImageData(0, 0, imageWidth, imageHeight);
    
    // Pre-calculate some values
    const wordListLength = wordList.length;
    
    // Run iterations to find best word placement
    for (let i = 0; i < maxIterations; i++) {
        // Select a random text block
        const textBlock = wordList[Math.floor(Math.random() * wordListLength)];
        
        // Random position
        const x = Math.random() * imageWidth;
        const y = Math.random() * imageHeight;
        
        // Check if this position is worth trying
        const pixelIndex = Math.floor(y) * imageWidth + Math.floor(x);
        const brightness = sourceBrightnessArr[pixelIndex] || 0;
        if (brightness < 20 || brightness > 235) continue;
        
        // Random size
        const fontSize = Math.floor(Math.random() * (processingParams.maxSize - processingParams.minSize + 1)) + processingParams.minSize;
        
        // Get cached word metrics
        const wordKey = `${textBlock}-${fontSize}`;
        let metrics = wordMetricsCache.get(wordKey);
        if (!metrics) {
            // Limit cache size
            if (wordMetricsCache.size >= maxCacheSize) {
                const firstKey = wordMetricsCache.keys().next().value;
                wordMetricsCache.delete(firstKey);
            }
            
            candidateCtx.font = `${fontSize}px Arial`;
            metrics = candidateCtx.measureText(textBlock);
            wordMetricsCache.set(wordKey, metrics);
        }
        
        // Check if text block fits within canvas bounds
        if (x + metrics.width > imageWidth || y - fontSize < 0) continue;
        
        // Random rotation
        const rotation = Math.random() * Math.PI * 2;
        
        // Get color from original image at this position
        let color;
        if (processingParams.useColor) {
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            color = `