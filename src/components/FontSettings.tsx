import { Fieldset, Select, TextField, Checkbox } from 'react95';
import { InputWrapper, Label, Description } from './StyledComponents';
import { useState } from 'react';
import { WEB_SAFE_FONTS } from '../constants';

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
  const [availableFonts, setAvailableFonts] = useState<string[]>(WEB_SAFE_FONTS);
  const [hasAttemptedLocalFonts, setHasAttemptedLocalFonts] = useState(false);

  const loadLocalFonts = async () => {
    if (hasAttemptedLocalFonts) return;
    
    try {
      const fonts = await window.queryLocalFonts();
      const fontFamilies = new Set<string>(WEB_SAFE_FONTS);
      
      for (const font of fonts) {
        fontFamilies.add(font.family);
      }
      
      setAvailableFonts(Array.from(fontFamilies).sort());
    } catch (error) {
      console.error('Error loading fonts:', error);
      // Keep using web-safe fonts if there's an error
    } finally {
      setHasAttemptedLocalFonts(true);
    }
  };

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
          onChange={(selectedOption) => {
            onSelectChange('font.family', selectedOption.value);
            loadLocalFonts(); // Attempt to load local fonts when user selects a font
          }}
          id="fontFamilyInput"
          options={availableFonts.map(font => ({
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