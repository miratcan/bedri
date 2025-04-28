import styled from 'styled-components';

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

export const StyledFieldset = styled.div<{ label?: string }>`
  border: 2px solid #000000;
  padding: 10px;
  margin: 10px 0;
  background: #c0c0c0;
  position: relative;

  &::before {
    content: "${props => props.label || ''}";
    position: absolute;
    top: -20px;
    left: 10px;
    background: #c0c0c0;
    padding: 0 5px;
    font-size: 14px;
  }
`; 