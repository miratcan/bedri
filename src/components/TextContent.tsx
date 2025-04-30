import { Select, TextField, Fieldset } from 'react95';
import { InputWrapper, Label, Description } from './StyledComponents';

import { USE_TYPES } from '../constants';

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
    <Fieldset label="Text Content">
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

      <InputWrapper>
        <Label htmlFor="blocksInput">Text Blocks</Label>
        <TextField
          name="blocks"
          value={inputValues.blocks}
          onChange={onTextInputChange}
          placeholder="Enter text blocks (one per line)"
          id="blocksInput"
          multiline
          rows={5}
        />
      </InputWrapper>
    </Fieldset>
  );
} 