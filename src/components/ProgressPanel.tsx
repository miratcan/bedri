import { WorkerProcessStats } from '../types';

interface ProgressPanelProps {
  currentGeneration: number;
  processStats: WorkerProcessStats;
}

export function ProgressPanel({ currentGeneration, processStats }: ProgressPanelProps) {
  return (
    <div class="progress-panel">
      <h3 class="progress-title">Processing Status</h3>
      <p>Generation: {currentGeneration}</p>
      <table class="progress-table">
        <thead>
          <tr>
            <th>Worker</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(processStats).map(([id, stats]) => {
            return (
              <tr key={id}>
                <td>Worker {id}</td>
                <td>{stats.processed}/{stats.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
} 