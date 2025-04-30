import styled from 'styled-components';
import { Window } from 'react95';

// Common input components
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  color: #000000;
`;

export const Description = styled.p`
  color: #000000;
  margin-bottom: 10px;
`;

// Common canvas component
export const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

// Common progress component
export const StyledProgress = styled.progress`
  width: 100%;
  height: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #c0c0c0;
  border: 2px solid #000000;
  border-radius: 0;
  box-shadow: none;

  &::-webkit-progress-bar {
    background: #c0c0c0;
  }

  &::-webkit-progress-value {
    background: #000080;
  }

  &::-moz-progress-bar {
    background: #000080;
  }
`;

// Common fieldset component
export const StyledFieldset = styled.div<{ label?: string }>`
  border: 2px solid #000000;
  padding: 10px;
  margin-bottom: 10px;
  position: relative;

  &::before {
    content: "${props => props.label || ''}";
    position: absolute;
    top: -10px;
    left: 10px;
    background: #c0c0c0;
    padding: 0 5px;
    font-size: 12px;
  }
`;

// Common window component
export const StyledWindow = styled(Window)`
  width: 100%;
`; 