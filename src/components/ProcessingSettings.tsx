import { Fieldset, TextField } from 'react95';
import { InputWrapper, Label, Description } from './StyledComponents';

interface ProcessingSettingsProps {
  inputValues: {
    iterations: number;
    generations: number;
  };
  onTextInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function ProcessingSettings({ inputValues, onTextInputChange }: ProcessingSettingsProps) {
  return (
    <Fieldset label="Processing Settings">
      <Description>
        Control how the genetic algorithm works. More iterations will find better placements for each text block, while more generations will add more text blocks to the final image.
      </Description>
      <InputWrapper>
        <Label htmlFor="iterationsInput">Iterations</Label>
        <TextField
          type="number"
          name="iterations"
          value={inputValues.iterations}
          onChange={onTextInputChange}
          placeholder="Iterations"
          id="iterationsInput"
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="generationsInput">Generations</Label>
        <TextField
          type="number"
          name="generations"
          value={inputValues.generations}
          onChange={onTextInputChange}
          placeholder="Generations"
          id="generationsInput"
        />
      </InputWrapper>
    </Fieldset>
  );
} 