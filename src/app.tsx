import { useEffect, useRef, useState } from 'preact/hooks';
import './app.css';
import { FontSettings } from './components/FontSettings';
import { ImageUpload } from './components/ImageUpload';
import { ProcessingSettings } from './components/ProcessingSettings';
import { ShadowSettings } from './components/ShadowSettings';
import { TextContent } from './components/TextContent';
import { DEFAULT_BLOCKS, MAX_ACTIVE_WORKERS } from './constants';
import { Options, DestinationImage, WorkerMessage, WorkerProcessStats, Candidate, UpdateMessage, BaseMessage, DoneMessage, ErrorMessage, CurrentImage, InitMessage } from './types';
import { ProgressPanel } from './components/ProgressPanel';
import { Controls } from './components/Controls';


export function App() {
  const [inputValues, setInputValues] = useState({
    blocks: DEFAULT_BLOCKS,
    useType: 'lines',
    font: {
      family: 'Arial',
      minSize: '10',
      maxSize: '50',
      opacity: '0.5',
      bold: 'false',
      shadow: {
        color: '#000000',
        blur: '0',
        offsetX: '0',
        offsetY: '0',
        enabled: 'false'
      }
    },
    iterations: '100',
    generations: '2500'
  });
  const [processing, setProcessing] = useState(false);
  const [currentGeneration, setCurrentGeneration] = useState<number>(0);
  const [processStats, setProcessStats] = useState<WorkerProcessStats>();
  const [champions, setChampions] = useState<Record<number, Candidate>>({});
  const [currentImage, setCurrentImage] = useState<CurrentImage | null>(null);
  const [destinationImage, setDestinationImage] = useState<DestinationImage | null>(null);

  const workersRef = useRef<Array<Worker>>([]);
  const currentCanvasRef = useRef<HTMLCanvasElement>(null);
  const destinationCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    initializeWorkerPool()
  }, [])

  useEffect(() => {
    // Find the champion of champions and draw it to the canvas
    if (Object.keys(champions).length > 0 && destinationCanvasRef.current && destinationImage) {
      // Find the champion with the highest score
      const championArray = Object.values(champions) as Candidate[];
      const bestChampion = championArray.reduce((best, current) => {
        if (!best || (current.score ?? 0) > (best.score ?? 0)) {
          return current;
        }
        return best;
      }, null as Candidate | null);
      
      if (bestChampion) {
        // Draw the best champion to the destination canvas
        const ctx = currentCanvasRef.current!.getContext('2d') as CanvasRenderingContext2D;
        if (ctx) {
          
          // Draw the champion
          ctx.save();
          ctx.font = `${bestChampion.s}px ${inputValues.font.family}`;
          ctx.fillStyle = `rgba(255, 255, 255, ${bestChampion.o})`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          // Apply shadow if enabled
          if (inputValues.font.shadow.enabled === 'true') {
            ctx.shadowColor = inputValues.font.shadow.color;
            ctx.shadowBlur = parseInt(inputValues.font.shadow.blur);
            ctx.shadowOffsetX = parseInt(inputValues.font.shadow.offsetX);
            ctx.shadowOffsetY = parseInt(inputValues.font.shadow.offsetY);
          }
          
          // Draw the text
          ctx.fillText(bestChampion.t, bestChampion.x, bestChampion.y);
          ctx.restore();
          
          // Update current generation
          setCurrentGeneration(prev => prev + 1);
          
          // Update current image with the new canvas content
          if (destinationCanvasRef.current) {
            const imageData = ctx.getImageData(0, 0, destinationImage.size.width, destinationImage.size.height);
            setCurrentImage({
              iData: imageData,
              size: {
                width: destinationImage.size.width,
                height: destinationImage.size.height
              }
            });
            
            // If still processing, initialize workers with the new current image
            if (processing) {
              const options = readOptions();
              for (let i = 0; i < MAX_ACTIVE_WORKERS; i++) {
                const worker = workersRef.current[i];
                if (!worker) {
                  console.log(`Error: Worker ${i} not found`);
                  continue;
                }
                const nofCandidates = Math.floor(options.iterations / MAX_ACTIVE_WORKERS) +
                  (i < options.iterations % MAX_ACTIVE_WORKERS ? 1 : 0);
                worker.postMessage({
                  action: 'init',
                  workerId: i,
                  timestamp: Date.now(),
                  currentImage: {
                    iData: imageData,
                    size: {
                      width: destinationImage.size.width,
                      height: destinationImage.size.height
                    }
                  },
                  destinationImage: destinationImage,
                  options: options,
                  nofCandidates: nofCandidates
                });
              }
            }
          }
        }
      }
    }


  }, [champions])

  useEffect(() => {
    // Update the current canvas when currentImage changes
    if (currentImage && currentCanvasRef.current) {
      const ctx = currentCanvasRef.current.getContext('2d');
      if (ctx) {
        // Make sure canvas dimensions match the image data
        if (currentCanvasRef.current.width !== currentImage.iData.width ||
          currentCanvasRef.current.height !== currentImage.iData.height) {
          currentCanvasRef.current.width = currentImage.iData.width;
          currentCanvasRef.current.height = currentImage.iData.height;
        }
        // Draw the current image data to the canvas
        ctx.putImageData(currentImage.iData, 0, 0);
      }
    }
  }, [currentImage])

  useEffect(() => {
    // Redraw the destination canvas when destinationImage changes
    if (destinationImage && destinationCanvasRef.current) {
      const ctx = destinationCanvasRef.current.getContext('2d');
      if (ctx) {
        // Make sure canvas dimensions match the image data
        if (destinationCanvasRef.current.width !== destinationImage.size.width ||
          destinationCanvasRef.current.height !== destinationImage.size.height) {
          destinationCanvasRef.current.width = destinationImage.size.width;
          destinationCanvasRef.current.height = destinationImage.size.height;
        }
        // Draw the destination image data to the canvas
        ctx.putImageData(destinationImage.iData, 0, 0);
      }
    }
  }, [destinationImage])

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const [, subsection, field] = target.name.split('.');

    if (subsection && field) {
      setInputValues(prev => ({
        ...prev,
        font: {
          ...prev.font,
          shadow: {
            ...prev.font.shadow,
            [field]: target.value
          }
        }
      }));
    } else if (subsection) {
      setInputValues(prev => ({
        ...prev,
        font: {
          ...prev.font,
          [subsection]: target.value
        }
      }));
    } else {
      setInputValues(prev => ({
        ...prev,
        [target.name]: target.value
      }));
    }
  };

  const readOptions = (): Options => {
    const blocks = inputValues.useType === 'words'
      ? inputValues.blocks.trim().split(/\s+/)
      : inputValues.blocks.trim().split(/\n+/);

    return {
      blocks,
      font: {
        family: inputValues.font.family,
        minSize: parseInt(inputValues.font.minSize),
        maxSize: parseInt(inputValues.font.maxSize),
        opacity: parseFloat(inputValues.font.opacity),
        bold: inputValues.font.bold === 'true',
        shadow: {
          color: inputValues.font.shadow.color,
          blur: parseInt(inputValues.font.shadow.blur),
          offsetX: parseInt(inputValues.font.shadow.offsetX),
          offsetY: parseInt(inputValues.font.shadow.offsetY),
          enabled: inputValues.font.shadow.enabled === 'true'
        }
      },
      iterations: parseInt(inputValues.iterations),
      generations: parseInt(inputValues.generations)
    };
  };

  const downloadImage = () => {
    if (destinationCanvasRef.current) {
      const link = document.createElement("a");
      link.href = destinationCanvasRef.current.toDataURL("image/png");
      link.download = "textdraw.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const initializeWorkerPool = () => {
    // Clear existing workers if any
    workersRef.current.forEach(worker => {
      if (worker) {
        worker.terminate();
      }
    });
    workersRef.current = [];

    for (let i = 0; i < MAX_ACTIVE_WORKERS; i++) {
      console.log(`Initializing worker: ${i}`);
      try {
        const worker = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });
        worker.onmessage = (e: MessageEvent<WorkerMessage>) => {
          const { action, workerId } = e.data;

          if ('reason' in e.data) {
            console.log(`Worker ${workerId}: Error - ${e.data.reason}`);
            return;
          }

          if (workerId === undefined) {
            console.log('Worker message received without ID');
            return;
          }

          switch (action) {
            case 'ready':
              console.log(`Worker ${workerId} initialized and ready.`);
              setProcessStats(prevState => {
                const old = prevState ?? {};
                return {
                  ...old,
                  [workerId]: {
                    total: 0,
                    processed: 0
                  }
                };
              });
              break;
            case 'initialized':
              if (!processing) {
                workersRef.current[workerId]?.postMessage({
                  action: 'process',
                  timestamp: Date.now(),
                  workerId
                });
              }
              break;
            case 'update':
              const updateMessage = e.data as UpdateMessage & BaseMessage;
              setProcessStats(prevState => {
                const old = prevState ?? {};
                return {
                  ...old,
                  [workerId]: {
                    total: updateMessage.total,
                    processed: updateMessage.processed
                  }
                };
              });
              break;
            case 'done':
              const doneMessage = e.data as DoneMessage & BaseMessage;
              setChampions(prevState => ({
                ...prevState,
                [workerId]: doneMessage.fittest.candidate as Candidate
              }));
              break;
            case 'error':
              const errorMessage = e.data as ErrorMessage & BaseMessage;
              console.log(`Worker ${workerId}: Error - ${errorMessage.reason}`);
              break;
          }
        };

        worker.onerror = (error) => {
          console.log(`Worker error: ${error.message}`);
        };

        worker.postMessage({
          action: 'ignite',
          workerId: i,
          timestamp: Date.now()
        });
        workersRef.current[i] = worker;
      } catch (error) {
        console.log(`Failed to initialize worker ${i}: ${error}`);
      }
    }
  };

  const startProcessing = () => {
    if (processing) {
      return;
    }
    if (!destinationImage) {
      console.log("Error: Please upload an image first");
      alert("Please upload an image first.");
      return;
    }
    if (!workersRef.current || workersRef.current.length === 0) {
      console.log("Error: Workers not initialized");
      alert("Workers are not initialized yet.");
      return;
    }
    const options = readOptions();
    if (options.blocks.length === 0) {
      console.log("Error: No text blocks provided");
      alert("Please enter some text first.");
      return;
    }
    if (options.font.minSize >= options.font.maxSize) {
      console.log("Error: Invalid font size range");
      alert("Minimum font size must be less than maximum font size.");
      return;
    }
    setProcessing(true);
    setCurrentGeneration(0);
    setProcessStats({});
    setChampions({});
    for (let i = 0; i < MAX_ACTIVE_WORKERS; i++) {
      const worker = workersRef.current[i];
      if (!worker) {
        console.log(`Error: Worker ${i} not found`);
        continue;
      }
      const nofCandidates = Math.floor(options.iterations / MAX_ACTIVE_WORKERS) +
        (i < options.iterations % MAX_ACTIVE_WORKERS ? 1 : 0);
      worker.postMessage({
        action: 'init',
        workerId: i,
        timestamp: Date.now(),
        currentImage: currentImage,
        destinationImage: destinationImage,
        options: options,
        nofCandidates: nofCandidates
      });
    }
  };

  const stopProcessing = () => {
    console.log("Processing stopped by user");
    setProcessing(false);
    workersRef.current.forEach(worker => {
      worker.terminate();
    });
    initializeWorkerPool();
  };

  const reset = () => {
    console.log("Reset requested - clearing canvas");
    setProcessing(false);
    setCurrentGeneration(0);
    setProcessStats(undefined);
    setChampions({});
    if (destinationCanvasRef.current) {
      const ctx = destinationCanvasRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, destinationCanvasRef.current.width, destinationCanvasRef.current.height);
      }
    }
  };

  // Add progress visualization
  useEffect(() => {
    if (!destinationCanvasRef.current || !destinationImage || Object.keys(champions).length === 0) return;

    const ctx = destinationCanvasRef.current.getContext('2d');
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, destinationImage.size.width, destinationImage.size.height);

    // Draw each champion
    Object.values(champions).forEach(champion => {
      if (!champion) return;

      ctx.save();
      ctx.font = `${champion.s}px ${inputValues.font.family}`;
      ctx.fillStyle = `rgba(255, 255, 255, ${champion.o})`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Apply shadow if enabled
      if (inputValues.font.shadow.enabled === 'true') {
        ctx.shadowColor = inputValues.font.shadow.color;
        ctx.shadowBlur = parseInt(inputValues.font.shadow.blur);
        ctx.shadowOffsetX = parseInt(inputValues.font.shadow.offsetX);
        ctx.shadowOffsetY = parseInt(inputValues.font.shadow.offsetY);
      }

      // Apply rotation and draw text
      ctx.translate(champion.x, champion.y);
      ctx.rotate(champion.r);
      ctx.fillText(champion.t, 0, 0);
      ctx.restore();
    });
  }, [champions, destinationImage, inputValues.font]);

  useEffect(() => {
    return () => {
      workersRef.current?.forEach((worker: Worker) => worker.terminate());
    };
  }, []);

  return (
    <div class="wrapper">
      <div class="description">
        <p>Upload an image and enter text lines. The app will generate a text-based representation of the image using the provided text.</p>
      </div>

      <div class="canvas-container">
        <canvas ref={currentCanvasRef} id="currentCanvas" />
      </div>

      <div class="progress-container">
        {processStats && <ProgressPanel processStats={processStats} />}
      </div>

      <div class="inputs">
        <ImageUpload 
          destinationCanvasRef={destinationCanvasRef}
          destinationImage={destinationImage}
          setDestinationImage={setDestinationImage}
          setCurrentImage={setCurrentImage}
        />

        <TextContent
          inputValues={inputValues}
          onInputChange={handleInputChange}
        />

        <FontSettings
          inputValues={inputValues}
          onInputChange={handleInputChange}
        />

        <ShadowSettings
          inputValues={inputValues}
          onInputChange={handleInputChange}
        />

        <ProcessingSettings
          inputValues={inputValues}
          onInputChange={handleInputChange}
        />
        <Controls
          onStart={startProcessing}
          onStop={stopProcessing}
          onReset={reset}
          onDownload={downloadImage}
          processing={processing}
          imageLoaded={!!destinationImage}
          totalProcessed={processStats ? Object.values(processStats).reduce((sum, stat) => sum + stat.processed, 0) : 0}
          linesCount={processStats ? Object.values(processStats).reduce((sum, stat) => sum + stat.total, 0) : 0}
        />
      </div>

      <div class="ad-container">
        <div class="ad-placeholder">
          Sponsor
        </div>
        <div class="ad-placeholder">
          Sponsor
        </div>
        <div class="ad-placeholder">
          Sponsor
        </div>
      </div>
    </div>
  );
}
