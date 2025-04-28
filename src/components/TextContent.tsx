import { Select, TextField } from 'react95';
import styled from 'styled-components';
import { StyledFieldset } from './shared';

import { USE_TYPES } from '../constants';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 12px;
  color: #000000;
`;

const Description = styled.p`
  font-size: 12px;
  color: #000000;
  margin-bottom: 10px;
`;

interface TextContentProps {
  inputValues: {
    blocks: string;
    useType: string;
  };
  onTextInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectChange: (name: string, value: string) => void;
}

export function TextContent({ inputValues, onTextInputChange, onSelectChange }: TextContentProps) {
  return (
    <StyledFieldset label="Text Content">
      <Description>
        Enter the text blocks that will be used to draw the image. Each line will be treated as a separate block that can be placed and rotated independently.
      </Description>
      <InputWrapper>
        <Label htmlFor="useTypeInput">Use</Label>
        <Select
          name="useType"
          value={inputValues.useType}
          onChange={(selectedOption) => onSelectChange('useType', selectedOption.value)}
          id="useTypeInput"
          options={USE_TYPES.map(type => ({
            value: type.value,
            label: type.label
          }))}
        />
      </InputWrapper>
      <TextField
        name="blocks"
        value={inputValues.blocks}
        onChange={onTextInputChange}
        multiline
        rows={10}
        fullWidth
      />
    </StyledFieldset>
  );
} 