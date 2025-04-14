// --- Shortcut Functions ---
const $ = document.getElementById.bind(document);
const random = () => Math.random();
const floor = value => Math.floor(value);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const randBetween = (min, max) => random() * (max - min) + min;
const randLetter = letters => letters[floor(random() * letters.length)];
const setStatus = message => $('statusBar').textContent = message;

// --- Global Variables ---
let inputImage = new Image();
let inputCanvas = $('inputCanvas');
let inputCtx = inputCanvas.getContext('2d', { willReadFrequently: true });

let bestCanvas = $('bestCanvas');
let bestCtx = bestCanvas.getContext('2d', { willReadFrequently: true });

// GA globals
let population = [];
let populationCount = 24;
let mutationRate = 0.1;
let elitismPercentage = 0.15;
let selectionBias = 0.30;
let allowedLetters = '';
let minSize = 4, maxSize = 60;
let letterCount = 200;
let running = false;
let generation = 0;
let bestCandidate = null;
let bestCandidateFitness = Infinity;
let prevBestFitness = Infinity;

// Define fitness sampling step globally
let FITNESS_SAMPLING_STEP = 1;

// Precalculated brightness array for the input image
let targetBrightness = [];
let imgWidth = 0, imgHeight = 0;

// Individual canvases for the population
let individualCanvases = [];
let individualContexts = [];
let fitnessElements = [];

// --- Utility Functions ---

// Validate number input
function validateNumberInput(inputElement, minValue, maxValue) {
  const value = parseFloat(inputElement.value);
  if (isNaN(value) || value < minValue || (maxValue !== undefined && value > maxValue)) {
    inputElement.classList.add('invalid-input');
    return false;
  } else {
    inputElement.classList.remove('invalid-input');
    return true;
  }
}

// Validate all inputs
function validateInputs() {
  let isValid = true;
  
  isValid = validateNumberInput($('minSize'), 1, 100) && isValid;
  isValid = validateNumberInput($('maxSize'), 1, 300) && isValid;
  isValid = validateNumberInput($('letterCount'), 10, 1000) && isValid;
  isValid = validateNumberInput($('popSize'), 1, 100) && isValid;
  isValid = validateNumberInput($('mutationRate'), 0, 100) && isValid;
  isValid = validateNumberInput($('elitism'), 0, 100) && isValid;
  isValid = validateNumberInput($('selectionBias'), 0, 100) && isValid;
  
  const minSizeValue = parseFloat($('minSize').value);
  const maxSizeValue = parseFloat($('maxSize').value);
  if (minSizeValue >= maxSizeValue) {
    $('minSize').classList.add('invalid-input');
    $('maxSize').classList.add('invalid-input');
    isValid = false;
  }
  
  return isValid;
}

// Draw a candidate onto a given context
function drawCandidate(candidate, ctx) {
  // Reset context state to default
  ctx.resetTransform();
  ctx.globalAlpha = 1.0;
  ctx.globalCompositeOperation = 'source-over';
  
  // Clear canvas
  ctx.clearRect(0, 0, imgWidth, imgHeight);
  ctx.rect(0, 0, imgWidth, imgHeight);
  ctx.fillStyle = 'white';
  ctx.fill();
 
  // Set text properties
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Draw candidate's genome
  candidate.genome.forEach(gene => {
    // Save the current context state
    ctx.save();
    
    // Move to the letter's position
    ctx.translate(gene.x, gene.y);
    
    // Apply rotation
    ctx.rotate(gene.r * Math.PI / 180);
    
    // Set font and color
    ctx.font = `${gene.s}px sans-serif`;
    const colorValue = Math.floor(gene.c);
    // Use a higher opacity for darker colors to make them more visible
    const opacity = 0.1 + (colorValue / 255) * 0.4; // Range from 0.1 to 0.5
    ctx.fillStyle = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    
    // Draw the text at the rotated position
    ctx.fillText(gene.l, 0, 0);
    
    // Restore the context state
    ctx.restore();
  });
  
  // Debug: Draw a red pixel to ensure canvas is writable
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, 1, 1);
  
  // Debug: Log canvas dimensions and a sample pixel
  console.log(`Canvas dimensions: ${ctx.canvas.width}x${ctx.canvas.height}`);
  const sampleData = ctx.getImageData(0, 0, 1, 1).data;
  console.log(`Top-left pixel (red test): RGBA[${sampleData[0]}, ${sampleData[1]}, ${sampleData[2]}, ${sampleData[3]}]`);
}

// Compute brightness of a canvas context as a flat array
function computeBrightness(ctx) {
  let imgData = ctx.getImageData(0, 0, imgWidth, imgHeight).data;
  let brightness = new Float32Array(imgWidth * imgHeight);
  for (let i = 0; i < imgWidth * imgHeight; i++) {
    let offset = i * 4;
    brightness[i] = (imgData[offset] + imgData[offset+1] + imgData[offset+2]) / 3;
  }
  return brightness;
}

// Compute fitness of candidate using provided context
function evaluateCandidate(candidate, ctx) {
  // Draw candidate to the provided context
  console.log('evaluating candidate', candidate, ' on ctx: ', ctx)
  drawCandidate(candidate, ctx);
  
  let candidateBrightness = computeBrightness(ctx);
  console.log(candidateBrightness)
  let error = 0;
  let samplesCount = 0;
  
  for (let y = 0; y < imgHeight; y += FITNESS_SAMPLING_STEP) { 
    for (let x = 0; x < imgWidth; x += FITNESS_SAMPLING_STEP) { 
      const idx = y * imgWidth + x;
      let diff = candidateBrightness[idx] - targetBrightness[idx];
      error += diff * diff;
      samplesCount++;
    }
  }
  
  return error / samplesCount;
}

// Create a new candidate individual
function createCandidate() {
  let genome = [];
  for (let i = 0; i < letterCount; i++) {
    genome.push({
      l: randLetter(allowedLetters),
      x: randBetween(0, imgWidth),
      y: randBetween(0, imgHeight),
      s: randBetween(minSize, maxSize),
      c: randBetween(0, 255),  // color value between 0 (black) and 255 (white)
      r: randBetween(0, 360)   // rotation in degrees (0-360)
    });
  }
  return { genome: genome, fitness: Infinity };
}

// Initialize the GA population
function initPopulation() {
  population = [];
  for (let i = 0; i < populationCount; i++) {
    population.push(createCandidate());
  }
  
  generation = 0;
  bestCandidate = null;
  bestCandidateFitness = Infinity;
  prevBestFitness = Infinity;
  
  setupIndividualCanvases();
}

// Create and setup canvases for individual display
function setupIndividualCanvases() {
  const generationDisplay = $('generationDisplay');
  generationDisplay.innerHTML = '';
  individualCanvases = [];
  individualContexts = [];
  fitnessElements = [];
  
  for (let i = 0; i < populationCount; i++) {
    const card = document.createElement('div');
    card.className = 'individual-card';
    
    const canvas = document.createElement('canvas');
    canvas.className = 'individual-canvas';
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    canvas.style.width = '100%';
    canvas.style.height = 'auto';
    
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    const info = document.createElement('div');
    info.id = `fitness-${i}`;
    
    card.appendChild(canvas);
    card.appendChild(info);
    generationDisplay.appendChild(card);
    
    individualCanvases.push(canvas);
    individualContexts.push(ctx);
    fitnessElements.push(info);
  }
}

// Select one parent from population based on fitness with bias
function selectParent() {
  let sorted = population.slice().sort((a, b) => a.fitness - b.fitness);
  return random() < selectionBias ? sorted[0] : sorted[floor(random() * sorted.length)];
}

// Crossover two parents to produce a child candidate
function crossover(parentA, parentB) {
  let childGenome = [];
  
  for (let i = 0; i < letterCount; i++) {
    let geneA = {...parentA.genome[i]};
    let geneB = {...parentB.genome[i]};
    
    let newGene = {
      l: random() < 0.5 ? geneA.l : geneB.l,
      x: random() < 0.5 ? geneA.x : geneB.x,
      y: random() < 0.5 ? geneA.y : geneB.y,
      s: random() < 0.5 ? geneA.s : geneB.s,
      c: random() < 0.5 ? geneA.c : geneB.c,
      r: random() < 0.5 ? geneA.r : geneB.r
    };
    
    childGenome.push(newGene);
  }
  
  return { genome: childGenome, fitness: Infinity };
}

// Apply mutation to a candidate
function mutate(candidate) {
  for (let i = 0; i < candidate.genome.length; i++) {
    if (random() < mutationRate) {
      candidate.genome[i].l = randLetter(allowedLetters);
    }
    if (random() < mutationRate) {
      if (random() < 0.01) {
        candidate.genome[i].x = randBetween(0, imgWidth);
      } else {
        const maxDelta = imgWidth * 0.05; // Reduced from 0.1 to 0.05 for more precise positioning
        candidate.genome[i].x = clamp(candidate.genome[i].x + randBetween(-maxDelta, maxDelta), 0, imgWidth);
      }
   }
    if (random() < mutationRate) {
      if (random() < 0.01) {
        candidate.genome[i].y = randBetween(0, imgHeight);
      } else {
        const maxDelta = imgHeight * 0.05; // Reduced from 0.1 to 0.05 for more precise positioning
        candidate.genome[i].y = clamp(candidate.genome[i].y + randBetween(-maxDelta, maxDelta), 0, imgHeight);
      }
   }
    if (random() < mutationRate) {
      if (random() < 0.01) {
        candidate.genome[i].s = randBetween(minSize, maxSize);
      } else {
        const currentSize = candidate.genome[i].s;
        candidate.genome[i].s = clamp(currentSize + randBetween(-currentSize * 0.05, currentSize * 0.05), minSize, maxSize);
      }
    }
    if (random() < mutationRate) {
      if (random() < 0.01) {
        candidate.genome[i].c = randBetween(0, 255);
      } else {
        const maxDelta = 15; // Reduced from 25 to 15 for more subtle color changes
        candidate.genome[i].c = clamp(candidate.genome[i].c + randBetween(-maxDelta, maxDelta), 0, 255);
      }
    }
    if (random() < mutationRate) {
      if (random() < 0.01) {
        candidate.genome[i].r = randBetween(0, 360);
      } else {
        const maxDelta = 15; // Reduced from 45 to 15 for more subtle rotation changes
        candidate.genome[i].r = clamp(candidate.genome[i].r + randBetween(-maxDelta, maxDelta), 0, 360);
      }
    }
  }
}

// Create the next generation
function nextGeneration() {
  let newPopulation = [];

  population.sort((a, b) => a.fitness - b.fitness);

  let elites = Math.floor(elitismPercentage * populationCount);
  for (let i = 0; i < elites; i++) {
    let eliteGenome = population[i].genome.map(gene => ({...gene}));
    newPopulation.push({
      genome: eliteGenome,
      fitness: population[i].fitness
    });
  }

  while(newPopulation.length < populationCount) {
    let child = crossover(selectParent(), selectParent());
    mutate(child);
    newPopulation.push(child);
  }
  
  population = newPopulation;
  generation++;
}

// Main GA loop
function runGeneration(forced = false) {
  if (!running && !forced) { 
    return; 
  }

  if (generation === 0) {
    population.forEach(individual => {
      if (individual.fitness === Infinity) {
        individual.fitness = evaluateCandidate(individual, individualContexts[population.indexOf(individual)]);
      }
    });
  }

  let currentBest = null;
  let currentBestFitness = Infinity;
  
  population.forEach((individual, index) => {
    individual.fitness = evaluateCandidate(individual, individualContexts[index]);
    
    if (individual.fitness < currentBestFitness) {
      currentBestFitness = individual.fitness;
      currentBest = individual;
    }
  });
  
  population.forEach((individual, index) => {
    fitnessElements[index].textContent = `Fitness: ${Math.round(individual.fitness).toLocaleString()}`;
  });
  
  $('currentFitness').textContent = `Generation: ${generation}, Best Fitness: ${Math.round(currentBestFitness).toLocaleString()}`;
  
  // Update current best improvement percentage for informational purposes
  let improvement = 0;
  if (prevBestFitness !== Infinity) {
    improvement = (prevBestFitness - currentBestFitness) / prevBestFitness;
  }
  
  setStatus(`Gen ${generation}: Current best fitness: ${Math.round(currentBestFitness).toLocaleString()}, Improvement: ${(improvement * 100).toFixed(4)}%`);
  
  prevBestFitness = currentBestFitness;
  
  if (currentBestFitness < bestCandidateFitness) {
    bestCandidateFitness = currentBestFitness;
    bestCandidate = {
      genome: currentBest.genome.map(gene => ({...gene})),
      fitness: currentBest.fitness
    };
    
    drawCandidate(bestCandidate, bestCtx);
    $('bestFitness').textContent = `Best Fitness: ${Math.round(bestCandidateFitness).toLocaleString()}`;
  }
  
  nextGeneration();
  
  if (running) {
    requestAnimationFrame(() => runGeneration(false));
  }
}

// Initialize the GA
function initGA() {
  FITNESS_SAMPLING_STEP = Math.max(1, Math.floor(Math.sqrt(imgWidth * imgHeight) / 100));
  FITNESS_SAMPLING_STEP = 1;
  setStatus(`Fitness sampling step: ${FITNESS_SAMPLING_STEP}`);
  initPopulation();
}

// --- UI Event Handlers ---

$('startButton').addEventListener('click', function() {
  if (!validateInputs()) {
    setStatus("Please fix the invalid inputs.");
    return;
  }
  
  allowedLetters = $('lettersInput').value;
  if (!allowedLetters) {
    setStatus("Please provide at least one character in the alphabet.");
    return;
  }
  
  minSize = parseFloat($('minSize').value);
  maxSize = parseFloat($('maxSize').value);
  letterCount = parseInt($('letterCount').value);
  populationCount = parseInt($('popSize').value);
  mutationRate = parseFloat($('mutationRate').value) / 100;
  elitismPercentage = parseFloat($('elitism').value) / 100;
  selectionBias = parseFloat($('selectionBias').value) / 100;
  
  if (imgWidth === 0 || imgHeight === 0) {
    setStatus("Please load an image first.");
    return;
  }

  setStatus("Initializing genetic algorithm...");
  
  setTimeout(() => {
    initGA();
    running = true;
    setStatus("Running genetic algorithm...");
    requestAnimationFrame(() => runGeneration(false));
  }, 100);
});

$('pauseButton').addEventListener('click', function() {
  running = false;
  setStatus("Paused.");
});

$('stepButton').addEventListener('click', function() {
  setStatus("Running one generation step...");
  runGeneration(true);
});

$('continueButton').addEventListener('click', function() {
  if (!running) {
    running = true;
    setStatus("Continuing genetic algorithm...");
    requestAnimationFrame(() => runGeneration(false));
  }
});

$('resetButton').addEventListener('click', function() {
  running = false;
  generation = 0;
  bestCandidate = null;
  bestCandidateFitness = Infinity;
  prevBestFitness = Infinity;
  population = [];
  
  bestCtx.clearRect(0, 0, bestCanvas.width, bestCanvas.height);
  const generationDisplay = $('generationDisplay');
  generationDisplay.innerHTML = '';
  
  $('currentFitness').textContent = '';
  $('bestFitness').textContent = '';
  setStatus("Reset complete.");
});

$('imageLoader').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  setStatus("Loading image...");
  
  const reader = new FileReader();
  reader.onload = function(event) {
    inputImage.onload = function() {
      imgWidth = inputImage.width;
      imgHeight = inputImage.height;
      
      inputCanvas.width = imgWidth;
      inputCanvas.height = imgHeight;
      bestCanvas.width = imgWidth;
      bestCanvas.height = imgHeight;
      
      inputCtx.drawImage(inputImage, 0, 0, imgWidth, imgHeight);
      
      targetBrightness = computeBrightness(inputCtx);
      
      setupIndividualCanvases();
      
      setStatus(`Image loaded (${imgWidth}x${imgHeight}). Ready to start.`);
    }
    inputImage.src = event.target.result;
  }
  reader.readAsDataURL(file);
});

setStatus("Please load an image to begin.");