import { WorkerProcessStats } from '../types';

interface ProgressPanelProps {
  processStats: WorkerProcessStats;
}

export function ProgressPanel({ processStats }: ProgressPanelProps) {
  return (
    <div class="progress-panel">
      <h3 class="progress-title">Processing Status</h3>
      {Object.entries(processStats).map(([id, stats]) => {
        const percentage = Math.round((stats.processed / stats.total) * 100) || 0;
        return (
          <div key={id} class="progress-item">
            <span class="progress-label">Worker {id}</span>
            <div class="progress-bar-container">
              <div class="progress-bar" style={{ width: `${percentage}%` }}></div>
            </div>
            <span class="progress-stats">{stats.processed}/{stats.total} ({percentage}%)</span>
          </div>
        );
      })}
    </div>
  );
} 