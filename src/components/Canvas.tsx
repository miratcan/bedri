import { RefObject } from 'react';

interface CanvasProps {
  srcCanvasRef: RefObject<HTMLCanvasElement>;
  dstCanvasRef: RefObject<HTMLCanvasElement>;
  imageLoaded: boolean;
}

export function Canvas({ srcCanvasRef, dstCanvasRef, imageLoaded }: CanvasProps) {
  return (
    <>
      <canvas ref={dstCanvasRef} id="dstCanvas" />
      {imageLoaded && <canvas ref={srcCanvasRef} id="sCanvas" style={{ display: 'none' }} />}
    </>
  );
} 