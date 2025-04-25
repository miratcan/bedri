import { Width, Height, Candidate, SelectedImage, Options, CurrentImage } from './types';

type CanvasContext = CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;

/**
 * Calculates the brightness of each pixel in a canvas context.
 * 
 * This function extracts pixel data from the canvas context and computes
 * a brightness value for each pixel using the standard luminance formula:
 * Brightness = 0.299*R + 0.587*G + 0.114*B
 * 
 * Luminance formula: https://stackoverflow.com/q/596216
 * 
 * The result is a Float32Array where each element represents the brightness
 * of a corresponding pixel in the image, with values ranging from 0 (black)
 * to 255 (white).
 * 
 * @param testCanvasCtx - The canvas rendering context containing the image
 * @param w - Width of the image
 * @param h - Height of the image
 * @returns A Float32Array containing brightness values for each pixel
 */
export const calcBrightness = (testCanvasCtx: CanvasContext, w: Width, h: Height): Float32Array => {
  const pixelData = testCanvasCtx.getImageData(0, 0, w, h).data;
  const totalPixels = w * h;
  const result = new Float32Array(totalPixels);
  for (let i = 0; i < totalPixels; i++) {
    const pixelIndex = i * 4;
    const r = pixelData[pixelIndex];
    const g = pixelData[pixelIndex + 1];
    const b = pixelData[pixelIndex + 2];
    result[i] = 0.299 * r + 0.587 * g + 0.114 * b;
  }
  return result;
};

/**
 * Generates a random color in hsla color space. 
 * 
 * @param opacity: A number between 0 and 1 that defines opacity of the color.
 */
export const randColor = (opacity: number): string => {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 100);
  const l = Math.floor(Math.random() * 100);
  return `hsla(${h}, ${s}%, ${l}%, ${opacity})`;
};


export const generateCandidate = (selected: SelectedImage, options: Options): Candidate => {
    // Generate a random candidate for text placement
    // This function creates a single candidate with randomized properties
    // based on the provided options and selected image dimensions.
    // 
    // The candidate includes:
    // - A randomly selected text block from the options
    // - Font size within the min/max range specified in options
    // - Random position within the selected image boundaries
    // - Random color using randColor function
    // - Random rotation between -π/2 and π/2 radians
    
    const randomIndex = Math.floor(Math.random() * options.blocks.length);
    const randomText = options.blocks[randomIndex];
    return {
        text: randomText,
        size: Math.random() * (options.font.maxSize - options.font.minSize) + options.font.minSize,
        position: {
          x: Math.random() * selected.size.width,
          y: Math.random() * selected.size.height,
        },
        color: randColor(options.font.opacity),
        rotation: Math.random() * Math.PI - Math.PI / 2,
    }
}

export const generateCandidates = (selected: SelectedImage, options: Options, nofCandidates: number): Candidate[] => {
    return [...Array(nofCandidates)].map(() => generateCandidate(selected, options));
}

export const renderCandidate = (
  currentImage: CurrentImage,
  candidate: Candidate,
  options: Options,
  target: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
): void => {
  // Clear the canvas
  target.putImageData(currentImage.iData, 0, 0);

  // Set up text rendering
  const fontWeight = options.font.bold ? 'bold' : 'normal';
  target.font = `${fontWeight} ${candidate.size}px ${options.font.family}`;
  target.fillStyle = candidate.color;
  target.textAlign = 'center';
  target.textBaseline = 'middle';

  // Apply rotation
  target.translate(candidate.position.x, candidate.position.y);
  target.rotate(candidate.rotation);
  target.fillText(candidate.text, 0, 0);
  target.rotate(-candidate.rotation);
  target.translate(-candidate.position.x, -candidate.position.y);
}

/**
 * Calculates the fitness score of a candidate by comparing its rendered brightness
 * with the target image's brightness.
 * 
 * The fitness score is calculated as the inverse of the mean squared error (MSE)
 * between the candidate's brightness and the target image's brightness.
 * A higher score indicates a better match.
 * 
 * @param candidate - The candidate text placement to evaluate
 * @param selectedImage - The source image data to compare against
 * @returns The fitness score of the candidate
 */
export const calcFitness = (
    currentImage: CurrentImage,
    candidate: Candidate,
    selectedImage: SelectedImage,
    options: Options,
    ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D
): number => {
    renderCandidate(currentImage, candidate, options, ctx);

    const candidateBrightness = calcBrightness(
      ctx, selectedImage.size.width, selectedImage.size.height
    );

    let mse = 0;
    for (let i = 0; i < selectedImage.bArray.length; i++) {
        const diff = candidateBrightness[i] - selectedImage.bArray[i];
        mse += diff * diff;
    }
    mse /= selectedImage.bArray.length;

    return 1 / (mse + 0.0001);
};

