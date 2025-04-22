import { h } from 'preact';

interface LogsProps {
  logs: string[];
}

export function Logs({ logs }: LogsProps) {
  return (
    <div class="logs">
      {logs.map((log, index) => (
        <div key={index} class="log-entry">
          {log}
        </div>
      ))}
    </div>
  );
} 