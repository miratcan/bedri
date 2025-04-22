import { h } from 'preact';
import { Fittest } from '../types';

interface ControlsProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onDownload: () => void;
  processing: boolean;
  imageLoaded: boolean;
  totalProcessed: number;
  linesCount: number;
}

export function Controls({ onStart, onStop, onReset, onDownload, processing, imageLoaded, totalProcessed, linesCount }: ControlsProps) {
  return (
    <div class="controls">
      <button onClick={onStart}>
        Start
      </button>
      <button onClick={onStop}>
        Stop
      </button>
      <button onClick={onReset}>
        Reset
      </button>
      <button onClick={onDownload}>
        Download
      </button>
      <progress id="progress" value={totalProcessed} max={linesCount} />
    </div>
  );
} 