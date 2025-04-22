export type Width = number;
export type Height = number;
export type BrightnessArray = Float32Array;
export interface Position { x: number; y: number; }
export interface Size { width: number; height: number; }

export interface Options {
  // Configuration options for the text-to-image algorithm
  // Contains settings for text blocks, font properties, and algorithm parameters
  // Used to control the appearance and optimization process
  blocks: string[];
  font: {
    family: string;
    minSize: number;
    maxSize: number;
    opacity: number;
    bold: boolean;
    shadow: {
      color: string;
      blur: number;
      offsetX: number;
      offsetY: number;
      enabled: boolean;
    };
  };
  iterations: number;
  generations: number;
}
export interface CurrentImage {
  // Represents the current working image in the optimization process
  // Contains the brightness array and image data for the current state
  // Used to track the evolving image during the genetic algorithm iterations.
  //
  // Size data is not included here because CurrentImage size is always the same as 
  // DestinationImage size.
  //
  // This avoids redundant storage of dimensions that are already available in the DestinationImage
  iData: ImageData;
  size: {
    width: number;
    height: number;
  };
  bArray?: Float32Array;
}
export interface DestinationImage {
  // The destination image properties and data
  // Contains the original image dimensions, brightness array, and image data
  // Used as the target for optimization in the genetic algorithm
  size: Size;
  bArray: BrightnessArray;
  iData: ImageData;
}

export interface Candidate {
  t: string;  // text
  s: number;  // size
  x: number;  // x position
  y: number;  // y position
  o: number;  // opacity
  r: number;  // rotation in radians
  score?: number;
}

export interface ProcessStats {
  // Statistics about the processing progress
  // Tracks the total number of candidates and how many have been processed
  // Used to update the UI with progress information
  total: number;
  processed: number;
}

export type WorkerProcessStats = {
  // Maps worker IDs to their processing statistics
  // Used to track and display the progress of each worker in the pool
  // This allows the UI to show individual worker progress during processing
  [key: number]: ProcessStats;
}

export interface Generation {
  id: number;
  fittest: Candidate;
}

export interface Fittest {
  candidate: Candidate | null;
  score: number;
}

export interface IgniteMessage {
  // Message to initialize a worker with a unique identifier
  // Sent from main thread to worker to start the worker with a specific ID
  // The worker uses this ID for all subsequent communications
  id: number;
  action: "ignite";
}

export interface InitMessage {
  // Message to initialize a worker with source image and configuration
  // Contains all necessary data for the worker to begin processing
  // Includes the destination image, algorithm options, and number of candidates to generate
  // The worker uses this to set up its internal state before processing begins
  workerId?: number;
  action: "init";
  currentImage: CurrentImage;
  destinationImage: DestinationImage;
  options: Options;
  nofCandidates: number;
}

export interface ReadyMessage {
  // Message indicating that a worker is ready for processing
  // Sent from worker to main thread after successful initialization
  // Signals that the worker can now accept processing tasks
  action: "ready";
}

export interface UpdateMessage {
  // Message to report progress during processing
  // Sent periodically from worker to main thread
  // Used to update UI with current processing status
  action: "update";
  total: number;
  processed: number;
}

export interface ProcessMessage {
  // Message to instruct a worker to begin processing its candidates
  // Sent from main thread to worker to start the fitness calculation
  // Triggers the worker to evaluate all its candidates
  action: "process";
}

export interface DoneMessage {
  // Message indicating that a worker has completed processing
  // Contains the fittest candidate found by this worker
  // Sent from worker to main thread when all candidates have been evaluated
  action: "done";
  fittest: Fittest;
}

export interface InitializedMessage {
  action: "initialized"
}

export interface ErrorMessage {
  // Message to report an error during worker processing
  // Contains a description of what went wrong
  // Used for error handling and debugging
  action: "error";
  reason: string;
}

export interface BaseMessage {
  // Base properties included in all worker messages
  // Provides timing information and worker identification
  // Used for tracking and debugging message flow
  timestamp: number;
  workerId: number;
}

export type WorkerMessage = 
  // Union type of all possible messages that can be exchanged with workers
  // Each message type extends BaseMessage to include common properties
  // Used for type-safe communication between main thread and workers
  | (IgniteMessage & BaseMessage)
  | (InitMessage & BaseMessage)
  | (ReadyMessage & BaseMessage)
  | (UpdateMessage & BaseMessage)
  | (ProcessMessage & BaseMessage)
  | (DoneMessage & BaseMessage)
  | (ErrorMessage & BaseMessage)
  | (InitializedMessage & BaseMessage);

export interface WorkerTask {
  candidates: Candidate[];
  batchInfo: {
    batchId: number;
    startIndex: number;
  };
}

