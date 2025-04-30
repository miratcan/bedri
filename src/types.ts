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
  // SelectedImage size.
  //
  // This avoids redundant storage of dimensions that are already available in the SelectedImage
  iData: ImageData;
  size: {
    width: number;
    height: number;
  };
  bArray?: Float32Array;
}
export interface SelectedImage {
  // The selected image properties and data
  // Contains the original image dimensions, brightness array, and image data
  // Used as the target for optimization in the genetic algorithm
  size: Size;
  bArray: BrightnessArray;
  iData: ImageData;
}

export interface Candidate {
  text: string;  // text
  size: number;  // size
  position: Position;
  color: string;  // color (hsla)
  rotation: number;  // rotation in radians
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

export interface Victor {
  candidate: Candidate | null;
  score: number;
}

export interface PrepareMessage extends BaseMessage {
  action: "prepare";
  selectedImage: SelectedImage;
}

export interface EnterMessage extends BaseMessage {
  action: "enter";
  nofCandidates: number;
  options: Options;
  legend?: Candidate;
  selectedImage: SelectedImage;
}

export interface ReadyMessage {
  // Message indicating that an arena is ready for processing
  // Sent from arena to main thread after successful initialization
  // Signals that the arena can now accept processing tasks
  action: "ready";
}

export interface UpdateMessage {
  // Message to report progress during processing
  // Sent periodically from arena to main thread
  // Used to update UI with current processing status
  action: "update";
  total: number;
  processed: number;
}

export interface BattleMessage {
  // Message to instruct an arena to begin processing its candidates
  // Sent from main thread to arena to start the fitness calculation
  // Triggers the arena to evaluate all its candidates
  action: "battle";
}

export interface DoneMessage {
  // Message indicating that an arena has completed processing
  // Contains the victor candidate found by this arena
  // Sent from arena to main thread when all candidates have been evaluated
  action: "done";
  victor: Victor;
}

export interface InitializedMessage {
  action: "initialized"
}

export interface ErrorMessage {
  // Message to report an error during arena processing
  // Contains a description of what went wrong
  // Used for error handling and debugging
  action: "error";
  reason: string;
}

export interface BaseMessage {
  // Base properties included in all arena messages
  // Provides timing information and arena identification
  // Used for tracking and debugging message flow
  timestamp: number;
  workerId: number;
}

export type WorkerMessage = 
  // Union type of all possible messages that can be exchanged with arenas
  // Each message type extends BaseMessage to include common properties
  // Used for type-safe communication between main thread and arenas
  | (PrepareMessage & BaseMessage)
  | (EnterMessage & BaseMessage)
  | (ReadyMessage & BaseMessage)
  | (UpdateMessage & BaseMessage)
  | (BattleMessage & BaseMessage)
  | (DoneMessage & BaseMessage)
  | (ErrorMessage & BaseMessage)
  | (InitializedMessage & BaseMessage);

declare global {
  interface Window {
    queryLocalFonts: () => Promise<Array<{
      family: string;
      fullName: string;
      postscriptName: string;
      style: string;
    }>>;
  }
}



