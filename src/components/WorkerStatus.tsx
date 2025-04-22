import { h } from 'preact';

interface WorkerStatusProps {
  activeWorkers: number;
  totalWorkers: number;
  totalProcessed: number;
  linesCount: number;
}

const WorkerStatus = ({ activeWorkers, totalWorkers, totalProcessed, linesCount }: WorkerStatusProps) => {
  return (
    <div class="worker-status">
      <div class="worker-status-header">
        <h3>Worker Status</h3>
        <div class="progress-info">
          {totalProcessed} / {linesCount} lines processed
        </div>
      </div>
      <div class="worker-indicators">
        {Array.from({ length: totalWorkers }).map((_, index) => (
          <div 
            class={`worker-indicator ${index < activeWorkers ? 'active' : ''}`}
            title={`Worker ${index + 1} - ${index < activeWorkers ? 'Processing' : 'Idle'}`}
          >
            <div class="worker-icon">[ ]</div>
            <div class="worker-number">Worker {index + 1}</div>
            <div class="worker-status-text">{index < activeWorkers ? 'Processing' : 'Idle'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { WorkerStatus }; 