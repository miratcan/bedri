import { RefObject } from 'preact';

import { MAX_PIXEL_SIZE } from '../constants';
import { CurrentImage, SelectedImage } from '../types';
import { calcBrightness } from '../helpers';

interface ImageUploadProps {
  selectedCanvasRef: RefObject<HTMLCanvasElement>;
  selectedImage: SelectedImage | null;
  setSelectedImage: (source: SelectedImage | null) => void;
  setCurrentImage: (source: CurrentImage | null) => void;
}

export function ImageUpload({ 
  selectedCanvasRef, selectedImage, setSelectedImage, setCurrentImage
}: ImageUploadProps) {
  const onImgLoad = (img: HTMLImageElement) => {
    // Create temporary canvas for brightness calculation
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = img.width;
    tempCanvas.height = img.height;
    const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true });
    if (!tempCtx) return;

    // Draw image to temp canvas for brightness calculation
    tempCtx.drawImage(img, 0, 0);

    // Calculate brightness array
    const brightnessArray = calcBrightness(tempCtx, img.width, img.height);

    const _selected: SelectedImage = {
      size: {
        width: img.width,
        height: img.height,
      },
      bArray: brightnessArray,
      iData: tempCtx.getImageData(0, 0, img.width, img.height)
    };
    setSelectedImage(_selected);

    // Create blank black canvas for current image
    const blankCanvas = document.createElement('canvas');
    blankCanvas.width = img.width;
    blankCanvas.height = img.height;
    const blankCtx = blankCanvas.getContext('2d', { willReadFrequently: true });
    if (!blankCtx) return;

    // Fill with black
    blankCtx.fillStyle = 'black';
    blankCtx.fillRect(0, 0, img.width, img.height);

    const _current: CurrentImage = {
      bArray: new Float32Array(img.width * img.height), // All black pixels (0)
      iData: blankCtx.getImageData(0, 0, img.width, img.height),
      size: {
        width: img.width,
        height: img.height
      }
    };
    setCurrentImage(_current);
  };

  const handleImageChange = (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        if (img.width * img.height > MAX_PIXEL_SIZE) {
          alert(`Warning: Image dimensions (${img.width}x${img.height}) exceed recommended size. The app will work slow. Number of pixels: ${img.width * img.height}.`);
        }
        onImgLoad(img);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div class="image-upload-container">
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        id="fileInput"
        style="display: none"
      />
      <button 
        onClick={() => document.getElementById('fileInput')?.click()}
        class="upload-button"
      >
        {selectedImage ? 'Change Image' : 'Select Image'}
      </button>
      <canvas 
        ref={selectedCanvasRef}
        id="selectedCanvas" 
        width={selectedImage?.size.width || 100} 
        height={selectedImage?.size.height || 100}
      />
      {selectedImage && (
        <div class="image-info">
          <div>Dimensions: {selectedImage.size.width}x{selectedImage.size.height}px</div>
        </div>
      )}
    </div>
  );
} 