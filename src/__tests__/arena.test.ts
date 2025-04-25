import { describe, it, expect, beforeEach, vi } from 'vitest';
import { WorkerMessage } from '../types';

// Mock global objects
const mockSelf = {
  postMessage: vi.fn()
};

const MockOffscreenCanvas = class {
  width: number = 0;
  height: number = 0;
  getContext() {
    return {
      fillRect: vi.fn(),
      drawImage: vi.fn(),
      getImageData: vi.fn()
    };
  }
};

(global as any).self = mockSelf;
(global as any).OffscreenCanvas = MockOffscreenCanvas;

describe('Arena', () => {
  let arena: any;

  beforeEach(async () => {
    // Reset modules and mocks
    vi.resetModules();
    vi.clearAllMocks();
    arena = await import('../arena');
  });

  it('should handle prepare message correctly', () => {
    const mockSelectedImage = {
      size: { width: 10, height: 10 },
      bArray: new Float32Array(100),
      iData: { width: 10, height: 10, data: new Uint8ClampedArray(400) } as ImageData
    };
    const message: WorkerMessage = {
      action: 'prepare',
      timestamp: Date.now(),
      workerId: 1,
      selectedImage: mockSelectedImage
    };

    // Simulate message event
    const event = { data: message } as MessageEvent<WorkerMessage>;
    arena.self.onmessage(event);

    // Verify postMessage was called with correct arguments
    expect(mockSelf.postMessage).toHaveBeenCalledTimes(1);
    expect(mockSelf.postMessage).toHaveBeenCalledWith(expect.objectContaining({
      action: 'ready',
      workerId: 1,
      timestamp: expect.any(Number)
    }));
  });

  it('should handle errors correctly', () => {
    // Try to battle without initialization
    arena.self.onmessage({ 
      data: { 
        action: 'battle',
        workerId: 1,
        timestamp: Date.now()
      } 
    } as MessageEvent<WorkerMessage>);

    // Verify postMessage was called with error
    expect(mockSelf.postMessage).toHaveBeenCalledTimes(1);
    expect(mockSelf.postMessage).toHaveBeenCalledWith(expect.objectContaining({
      action: 'error',
      workerId: 1,
      reason: expect.any(String),
      timestamp: expect.any(Number)
    }));
  });
}); 