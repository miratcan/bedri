/**
 * Web Arena for processing text rendering and fitness calculations
 * This arena handles the optimization of text placement and styling
 * to match a target image using a genetic algorithm approach.
 */

import { SelectedImage, Candidate, WorkerMessage, CurrentImage, Options, EnterMessage, BaseMessage, PrepareMessage } from './types';
import { generateCandidates, calcFitness, calcBrightness, renderCandidate } from './helpers';

let id: number;
let selectedImage: SelectedImage;
let currentImage: CurrentImage;
let options: Options;
let candidates: Candidate[];
let canvas: OffscreenCanvas;
let canvasCtx: OffscreenCanvasRenderingContext2D | null;
let legend: Candidate | null = null;

function prepareArena(data: PrepareMessage & BaseMessage) {
  if (data.workerId === undefined) {
    self.postMessage({
      action: 'error',
      reason: 'You need to send workerId to prepare an arena.',
      timestamp: Date.now(),
      workerId: -1
    });
    return;
  }
  id = data.workerId;
  selectedImage = data.selectedImage!;

  // Create canvas with selected image dimensions
  canvas = new OffscreenCanvas(selectedImage.size.width, selectedImage.size.height);
  canvasCtx = canvas.getContext('2d', { willReadFrequently: true });
  if (!canvasCtx) {
    throw new Error('Failed to get 2D context');
  }

  // Initialize blank black canvas as currentImage
  canvasCtx.fillStyle = 'black';
  canvasCtx.fillRect(0, 0, selectedImage.size.width, selectedImage.size.height);
  
  // Set up initial currentImage state
  currentImage = {
    iData: canvasCtx.getImageData(0, 0, selectedImage.size.width, selectedImage.size.height),
    size: {
      width: selectedImage.size.width,
      height: selectedImage.size.height
    },
    bArray: new Float32Array(selectedImage.size.width * selectedImage.size.height) // All zeros for black
  };

  self.postMessage({ 
    action: 'ready', 
    timestamp: Date.now(), 
    workerId: id 
  });
}

function enterArena(data: EnterMessage & BaseMessage) {
  if (!data) {
    self.postMessage({
      action: 'error',
      reason: 'No data provided for initialization',
      timestamp: Date.now(),
      workerId: id
    });
    return;
  }
  if (!data.nofCandidates) {
    self.postMessage({
      action: 'error',
      reason: 'nofCandidates not provided for initialization',
      timestamp: Date.now(),
      workerId: id
    });
    return;
  }
  if (!data.options) {
    self.postMessage({
      action: 'error',
      reason: 'options not provided for initialization',
      timestamp: Date.now(),
      workerId: id
    });
    return;
  }

  // Update legend and draw it to our currentImage if provided
  if (data.legend) {
    legend = data.legend;
    
    // Clear canvas and draw current state
    canvasCtx!.putImageData(currentImage.iData, 0, 0);
    
    // Draw the legend on top
    renderCandidate(currentImage, legend, data.options, canvasCtx!);
    
    // Update currentImage with the new state including the legend
    currentImage = {
      iData: canvasCtx!.getImageData(0, 0, selectedImage.size.width, selectedImage.size.height),
      size: {
        width: selectedImage.size.width,
        height: selectedImage.size.height
      },
      bArray: calcBrightness(canvasCtx!, selectedImage.size.width, selectedImage.size.height)
    };
  }

  options = data.options;
  candidates = generateCandidates(selectedImage, options, data.nofCandidates);

  // Send debug info about generated candidates
  self.postMessage({
    action: 'debug',
    type: 'candidates',
    candidates: candidates,
    workerId: id,
    timestamp: Date.now()
  });

  self.postMessage({ 
    action: 'initialized', 
    timestamp: Date.now(),
    workerId: id
  });
}

function runBattle() {
  if (!candidates || candidates.length === 0) {
    self.postMessage({
      action: 'error',
      reason: 'No candidates to process. Enter must be called first to generate candidates.',
      timestamp: Date.now(),
      workerId: id
    });
    return;
  }
  if (!canvasCtx) {
    self.postMessage({
      action: 'error',
      reason: 'No canvas context found. Enter must be called first to generate candidates.',
      timestamp: Date.now(),
      workerId: id  
    });
    return;
  }

  let victor;
  for (let i = 0; i < candidates.length; i++) {
    self.postMessage({ 
      action: 'update', 
      total: candidates.length, 
      processed: i + 1,  
      timestamp: Date.now(), 
      workerId: id 
    });
    
    const candidate = candidates[i];
    const score = calcFitness(currentImage, candidate, selectedImage, options, canvasCtx);
    
    const scoredCandidate = { ...candidate, score };
    if (victor === undefined) { victor = scoredCandidate; continue; }
    if (victor.score <= scoredCandidate.score) { victor = scoredCandidate; continue; }
  }

  self.postMessage({
    action: 'done',
    victor: {
      candidate: victor,
      score: victor!.score || 0
    },
    timestamp: Date.now(),
    workerId: id
  });
}

// Handle messages from the main thread
self.onmessage = (e: MessageEvent<WorkerMessage>) => {
  const { data } = e;
  const { action } = data;
  // console.log(`Arena ${typeof data.workerId !== 'undefined' ? data.workerId : id} received action: ${action}`, data);
  switch (action) {
    case "prepare":
      prepareArena(data as PrepareMessage & BaseMessage);
      break;
    case "enter":
      enterArena(data as EnterMessage & BaseMessage);
      break;
    case "battle":
      runBattle();
      break;
  }
}; 