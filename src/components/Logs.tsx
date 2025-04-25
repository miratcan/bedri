interface LogsProps {
  logs: string[];
}

export function Logs({ logs }: LogsProps) {
  return (
    <div class="logs">
      {logs.slice(-10).map((log: string, index: number) => (
        <div class="log-entry" key={index}>{log}</div>
      ))}
    </div>
  );
} 