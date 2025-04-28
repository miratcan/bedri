interface WorkerStatusProps {
  activeWorkers: number;
  totalWorkers: number;
  totalProcessed: number;
  linesCount: number;
}

const WorkerStatus = ({ activeWorkers, totalWorkers, totalProcessed, linesCount }: WorkerStatusProps) => {
  return (
    <div className="worker-status">
      <div className="worker-status-header">
        <h3>Worker Status</h3>
        <div className="progress-info">
          {totalProcessed} / {linesCount} lines processed
        </div>
      </div>
      <div className="worker-indicators">
        {Array.from({ length: totalWorkers }).map((_, index) => (
          <div 
            className={`worker-indicator ${index < activeWorkers ? 'active' : ''}`}
            title={`Worker ${index + 1} - ${index < activeWorkers ? 'Processing' : 'Idle'}`}
          >
            <div className="worker-icon">[ ]</div>
            <div className="worker-number">Worker {index + 1}</div>
            <div className="worker-status-text">{index < activeWorkers ? 'Processing' : 'Idle'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { WorkerStatus }; 