import { Button, Toolbar } from 'react95';
import styled from 'styled-components';
import { StyledProgress } from './StyledComponents';

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

const Progress = styled.div`
  font-size: inherit;
  color: #000000;
`;

interface ControlsProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onDownload: () => void;
  testedCandidates: number;
  totalCandidates: number;
  currentGeneration: number;
  totalGenerations: number;
}

export function Controls({ onStart, onStop, onReset, onDownload, testedCandidates, totalCandidates, currentGeneration, totalGenerations }: ControlsProps) {
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
        <StyledProgress value={testedCandidates} max={totalCandidates} />
        <Progress>
          Candidates Tested: {testedCandidates} / {totalCandidates}
        </Progress>
        <StyledProgress value={currentGeneration} max={totalGenerations} />
        <Progress>
          Generations Passed: {currentGeneration} / {totalGenerations}
        </Progress>
      </ProgressContainer>
    </ControlsContainer>
  );
} 