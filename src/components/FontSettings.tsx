import { Fieldset, Select, TextField, Checkbox } from 'react95';
import styled from 'styled-components';

import { FONT_FAMILIES } from '../constants';

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

interface FontSettingsProps {
  inputValues: {
    font: {
      family: string;
      minSize: string;
      maxSize: string;
      opacity: string;
      bold: string;
      shadow: {
        color: string;
        blur: string;
        offsetX: string;
        offsetY: string;
        enabled: string;
      };
    };
  };
  onTextInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectChange: (name: string, value: string) => void;
}

export function FontSettings({ inputValues, onTextInputChange, onSelectChange }: FontSettingsProps) {
  return (
    <Fieldset label="Font Settings">
      <Description>
        Configure how the text will appear. Adjust the font family, size range, opacity, and whether the text should be bold.
      </Description>
      <InputWrapper>
        <Label htmlFor="fontFamilyInput">Font Family</Label>
        <Select
          name="font.family"
          value={inputValues.font.family}
          onChange={(selectedOption) => onSelectChange('font.family', selectedOption.value)}
          id="fontFamilyInput"
          options={FONT_FAMILIES.map(font => ({
            value: font,
            label: font
          }))}
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="minSizeInput">Min Size</Label>
        <TextField
          type="number"
          name="font.minSize"
          value={inputValues.font.minSize}
          onChange={onTextInputChange}
          placeholder="Min Size"
          id="minSizeInput"
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="maxSizeInput">Max Size</Label>
        <TextField
          type="number"
          name="font.maxSize"
          value={inputValues.font.maxSize}
          onChange={onTextInputChange}
          placeholder="Max Size"
          id="maxSizeInput"
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="opacityInput">Opacity</Label>
        <TextField
          type="number"
          name="font.opacity"
          value={inputValues.font.opacity}
          step="0.1"
          min="0"
          max="1"
          onChange={onTextInputChange}
          placeholder="Opacity"
          id="opacityInput"
        />
      </InputWrapper>

      <InputWrapper>
        <Checkbox
          name="font.bold"
          checked={inputValues.font.bold === 'true'}
          onChange={(e) => onSelectChange('font.bold', e.target.checked ? 'true' : 'false')}
          label="Bold"
        />
      </InputWrapper>
    </Fieldset>
  );
} 