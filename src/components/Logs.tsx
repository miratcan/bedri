interface LogsProps {
  logs: string[];
}

export function Logs({ logs }: LogsProps) {
  return (
    <div className="logs">
      {logs.slice(-10).map((log: string, index: number) => (
        <div className="log-entry" key={index}>{log}</div>
      ))}
    </div>
  );
} 