interface ProcessingSettingsProps {
  inputValues: {
    iterations: string;
    generations: string;
  };
  onInputChange: (e: Event) => void;
}

export function ProcessingSettings({ inputValues, onInputChange }: ProcessingSettingsProps) {
  return (
    <fieldset class="input-group">
      <legend>Processing Settings</legend>
      <p class="fieldset-description">Control how the genetic algorithm works. More iterations will find better placements for each text block, while more generations will add more text blocks to the final image.</p>
      <div class="input-wrapper">
        <label for="iterationsInput">Iterations</label>
        <input
          type="number"
          name="iterations"
          value={inputValues.iterations}
          onChange={onInputChange}
          placeholder="Iterations"
          id="iterationsInput"
        />
      </div>

      <div class="input-wrapper">
        <label for="generationsInput">Generations</label>
        <input
          type="number"
          name="generations"
          value={inputValues.generations}
          onChange={onInputChange}
          placeholder="Number of generations"
          id="generationsInput"
        />
      </div>
    </fieldset>
  );
} 