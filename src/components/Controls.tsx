interface ControlsProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onDownload: () => void;
  totalProcessed: number;
  linesCount: number;
}

export function Controls({ onStart, onStop, onReset, onDownload, totalProcessed, linesCount }: ControlsProps) {
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