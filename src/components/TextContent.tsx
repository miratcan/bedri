import { USE_TYPES } from '../constants';

interface TextContentProps {
  inputValues: {
    blocks: string;
    useType: string;
  };
  onInputChange: (e: Event) => void;
}

export function TextContent({ inputValues, onInputChange }: TextContentProps) {
  return (
    <fieldset class="input-group">
      <legend>Text Content</legend>
      <p class="fieldset-description">Enter the text blocks that will be used to draw the image. Each line will be treated as a separate block that can be placed and rotated independently.</p>
      <div class="input-wrapper">
        <label for="useTypeInput">Use</label>
        <select
          name="useType"
          value={inputValues.useType}
          onChange={onInputChange}
          id="useTypeInput"
        >
          {USE_TYPES.map(type => (
            <option value={type.value} key={type.value}>{type.label}</option>
          ))}
        </select>
      </div>
      <div class='input-wrapper'>
        <label for="blocksInput">Text Blocks</label>
        <textarea
          name="blocks"
          value={inputValues.blocks}
          onChange={onInputChange}
          placeholder="Enter text blocks (one per line)"
          rows={5}
          id="blocksInput"
        />
      </div>
   </fieldset>
  );
} 