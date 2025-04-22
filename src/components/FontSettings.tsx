import { FONT_FAMILIES } from '../constants';

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
  onInputChange: (e: Event) => void;
}

export function FontSettings({ inputValues, onInputChange }: FontSettingsProps) {
  return (
    <fieldset class="input-group">
      <legend>Font Settings</legend>
      <p class="fieldset-description">Configure how the text will appear. Adjust the font family, size range, opacity, and whether the text should be bold.</p>
      <div class="input-wrapper">
        <label for="fontFamilyInput">Font Family</label>
        <select
          name="font.family"
          value={inputValues.font.family}
          onChange={onInputChange}
          id="fontFamilyInput"
        >
          {FONT_FAMILIES.map(font => (
            <option value={font} key={font}>{font}</option>
          ))}
        </select>
      </div>

      <div class="input-wrapper">
        <label for="minSizeInput">Min Size</label>
        <input
          type="number"
          name="font.minSize"
          value={inputValues.font.minSize}
          onChange={onInputChange}
          placeholder="Min Size"
          id="minSizeInput"
        />
      </div>

      <div class="input-wrapper">
        <label for="maxSizeInput">Max Size</label>
        <input
          type="number"
          name="font.maxSize"
          value={inputValues.font.maxSize}
          onChange={onInputChange}
          placeholder="Max Size"
          id="maxSizeInput"
        />
      </div>

      <div class="input-wrapper">
        <label for="opacityInput">Opacity</label>
        <input
          type="number"
          name="font.opacity"
          value={inputValues.font.opacity}
          step="0.1"
          min="0"
          max="1"
          onChange={onInputChange}
          placeholder="Opacity"
          id="opacityInput"
        />
      </div>

      <div class="input-wrapper">
        <label for="boldInput">Bold</label>
        <select
          name="font.bold"
          value={inputValues.font.bold}
          onChange={onInputChange}
          id="boldInput"
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    </fieldset>
  );
} 