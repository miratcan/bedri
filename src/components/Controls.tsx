import { Button, Toolbar } from 'react95';
import styled from 'styled-components';
import { StyledProgress } from '../App';

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`;

const GenerationProgress = styled.div`
  font-size: 12px;
  color: #000000;
`;

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
    <ControlsContainer>
      <Toolbar>
        <Button onClick={onStart} primary>
          Start
        </Button>
        <Button onClick={onStop}>
          Stop
        </Button>
        <Button onClick={onReset}>
          Reset
        </Button>
        <Button onClick={onDownload}>
          Download
        </Button>
      </Toolbar>
      <ProgressContainer>
        <StyledProgress value={totalProcessed} max={linesCount} />
        <GenerationProgress>
          Generation: {totalProcessed} / {linesCount}
        </GenerationProgress>
      </ProgressContainer>
    </ControlsContainer>
  );
} 