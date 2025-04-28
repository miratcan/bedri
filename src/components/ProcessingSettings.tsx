import { Fieldset, TextField } from 'react95';
import styled from 'styled-components';

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
          placeholder="Number of generations"
          id="generationsInput"
        />
      </InputWrapper>
    </Fieldset>
  );
} 