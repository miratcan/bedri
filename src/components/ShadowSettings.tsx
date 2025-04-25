interface ShadowSettingsProps {
  inputValues: {
    font: {
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

export function ShadowSettings({ inputValues, onInputChange }: ShadowSettingsProps) {
  return (
    <fieldset class="input-group">
      <legend>Shadow Settings</legend>
      <p class="fieldset-description">Add depth to your text with shadow effects. Enable shadows and adjust their appearance with color, blur, and offset settings.</p>
      <div class="input-wrapper">
        <label for="shadowEnabledInput">Enabled</label>
        <select
          name="font.shadow.enabled"
          value={inputValues.font.shadow.enabled}
          onChange={onInputChange}
          id="shadowEnabledInput"
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>

      <div class="input-wrapper">
        <label for="shadowColorInput">Color</label>
        <input
          type="color"
          name="font.shadow.color"
          value={inputValues.font.shadow.color}
          onChange={onInputChange}
          id="shadowColorInput"
        />
      </div>

      <div class="input-wrapper">
        <label for="shadowBlurInput">Blur</label>
        <input
          type="number"
          name="font.shadow.blur"
          value={inputValues.font.shadow.blur}
          onChange={onInputChange}
          placeholder="Shadow Blur"
          id="shadowBlurInput"
        />
      </div>

      <div class="input-wrapper">
        <label for="shadowOffsetXInput">Offset X</label>
        <input
          type="number"
          name="font.shadow.offsetX"
          value={inputValues.font.shadow.offsetX}
          onChange={onInputChange}
          placeholder="Shadow Offset X"
          id="shadowOffsetXInput"
        />
      </div>

      <div class="input-wrapper">
        <label for="shadowOffsetYInput">Offset Y</label>
        <input
          type="number"
          name="font.shadow.offsetY"
          value={inputValues.font.shadow.offsetY}
          onChange={onInputChange}
          placeholder="Shadow Offset Y"
          id="shadowOffsetYInput"
        />
      </div>
    </fieldset>
  );
} 