/**
 * Web Worker for processing text rendering and fitness calculations
 * This worker handles the optimization of text placement and styling
 * to match a target image using a genetic algorithm approach.
 */

import { DestinationImage, Candidate, WorkerMessage, CurrentImage, Options, InitMessage, BaseMessage } from './types';
import { generateCandidates, calcFitness } from './helpers';

let id: number;
let currentImage: CurrentImage;
let options: Options;
let destinationImage: DestinationImage;
let candidates: Candidate[];
let canvas: OffscreenCanvas;

function handleIgnite(data: WorkerMessage) {
  if (data.workerId === undefined) {
    self.postMessage({
      action: 'error',
      reason: 'You need to send workerId to ignite a worker.',
      timestamp: Date.now(),
      workerId: -1
    });
    return;
  }
  id = data.workerId;
  canvas = new OffscreenCanvas(1, 1); // Default size, will be updated when source is received
  self.postMessage({ 
    action: 'ready', 
    timestamp: Date.now(), 
    workerId: id 
  });
}

function handleInit(data: InitMessage & BaseMessage) {
  if (!data) {
    self.postMessage({
      action: 'error',
      reason: 'The source, destination, options and number of candidates must be sent in data',
      timestamp: Date.now(),
      workerId: id
    });
    return;
  }
  if (!data.currentImage) {
    self.postMessage({
      action: 'error',
      reason: 'No current image provided for initialization',
      timestamp: Date.now(),
      workerId: id
    });
    return;
  }
  if (!data.destinationImage) {
    self.postMessage({
      action: 'error',
      reason: 'No destination provided for initialization',
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
  currentImage = data.currentImage;
  destinationImage = data.destinationImage;
  options = data.options;
  canvas.width = destinationImage.size.width;
  canvas.height = destinationImage.size.height;
  candidates = generateCandidates(destinationImage, data.options, data.nofCandidates);
  self.postMessage({ 
    action: 'initialized', 
    timestamp: Date.now(),
    workerId: id
  });
}
function handleProcess() {
  if (!candidates || candidates.length === 0) {
    self.postMessage({
      action: 'error',
      reason: 'No candidates to process. Init must be called first to generate candidates.',
      timestamp: Date.now(),
      workerId: id
    });
    return;
  }

  // Calculate the fittest.
  let fittest;
  for (let i = 0; i < candidates.length; i++) {
    self.postMessage({ 
      action: 'update', 
      total: candidates.length, 
      processed: i, 
      timestamp: Date.now(), 
      workerId: id 
    });
    const candidate = {...candidates[i], score: calcFitness(currentImage, candidates[i], destinationImage, options)}
    if (fittest === undefined) { fittest = candidate; continue; }
    if (fittest.score <= candidate.score) { fittest = candidate; continue; }
  }

  self.postMessage({
    action: 'done',
    fittest: {
      candidate: fittest,
      score: fittest!.score || 0
    },
    timestamp: Date.now(),
    workerId: id
  });
}

// Handle messages from the main thread
self.onmessage = (e: MessageEvent<WorkerMessage>) => {
  const { data } = e;
  const { action } = data;

  console.log(`Worker ${id} received action: ${action}`, data);

  switch (action) {
    case "ignite":
      handleIgnite(data);
      break;
    case "init":
      handleInit(data as InitMessage & BaseMessage);
      break;
    case "process":
      handleProcess();
      break;
  }
}; 