import { useEffect, useRef, useState, useMemo } from 'react';
import { Window, WindowHeader, WindowContent, Button, Fieldset, TextField, Select, Checkbox, Toolbar } from 'react95';
import styled from 'styled-components';
import { FontSettings } from './components/FontSettings';
import { ImageUpload } from './components/ImageUpload';
import { ProcessingSettings } from './components/ProcessingSettings';
import { TextContent } from './components/TextContent';
import { DEFAULT_BLOCKS, MAX_ACTIVE_WORKERS } from './constants';
import { Options, SelectedImage, WorkerMessage, WorkerProcessStats, Candidate, UpdateMessage, BaseMessage, DoneMessage, CurrentImage } from './types';
import { Controls } from './components/Controls';
import { renderCandidate } from './helpers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #008080;
  min-height: 100vh;
  gap: 20px;
`;

const MainContent = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
`;

const InputsContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CanvasContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  top: 20px;
  align-self: flex-start;
`;

const StyledWindow = styled(Window)`
  width: 100%;
`;

const StyledCanvas = styled.canvas`
  width: 100%;
  height: auto;
  background: white;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 12px;
  line-height: 1.4;
  color: #000000;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  a {
    color: #0000FF;
    text-decoration: underline;
    font-weight: bold;
    
    &:hover {
      color: #FF0000;
      text-decoration: none;
    }
    
    &:active {
      color: #FF0000;
      text-decoration: underline;
    }
  }
`;

export const StyledProgress = styled.progress`
  width: 100%;
  height: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #c0c0c0;
  border: 2px solid #000000;
  border-radius: 0;
  box-shadow: none;

  &::-webkit-progress-bar {
    background: #c0c0c0;
  }

  &::-webkit-progress-value {
    background: #000080;
  }

  &::-moz-progress-bar {
    background: #000080;
  }
`;

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
        enabled: 'false',
      },
    },
    iterations: 80,
    generations: 800
  });
  const [processing, setProcessing] = useState(false);
  const [currentGeneration, setCurrentGeneration] = useState<number>(0);
  const [processStats, setProcessStats] = useState<WorkerProcessStats>({});
  const [champions, setChampions] = useState<Record<number, Candidate>>({});
  const [currentImage, setCurrentImage] = useState<CurrentImage | null>(null);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const workersRef = useRef<Array<Worker>>([]);
  const currentCanvasRef = useRef<HTMLCanvasElement>(null);
  const selectedCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (selectedImage) {
      initializeWorkerPool();
    }
  }, [selectedImage]);

  useEffect(() => {
    // Only proceed if all workers have reported their champion
    if (
      Object.keys(champions).length !== MAX_ACTIVE_WORKERS ||
      !selectedCanvasRef.current ||
      !selectedImage
    ) {
      return;
    }

    // Only proceed if processing is active
    if (!processing) return;

    // If we've reached the max generations, stop processing
    if (currentGeneration + 1 >= options.generations) {
      setProcessing(false);
      return;
    }

    // Increment generation
    setCurrentGeneration(prev => prev + 1);

    // Find the legend among champions
    const championArray = Object.values(champions) as Candidate[];
    const legend = championArray.reduce((best, current) => {
      if (!best || (current.score ?? 0) > (best.score ?? 0)) {
        return current;
      }
      return best;
    }, null as Candidate | null);

    if (!legend) return;

    console.log('Legend for next generation:', JSON.stringify(legend));

    // Render the legend to a new image and update currentImage
    const canvas = document.createElement('canvas');
    canvas.width = selectedImage.size.width;
    canvas.height = selectedImage.size.height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (ctx) {
      // If there is a currentImage, start with it, otherwise fill with black
      if (currentImage) {
        ctx.putImageData(currentImage.iData, 0, 0);
      } else {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      // Use renderCandidate to draw the legend on top of the existing image
      renderCandidate(
        currentImage
          ? currentImage
          : {
            iData: ctx.getImageData(0, 0, canvas.width, canvas.height),
            size: { width: canvas.width, height: canvas.height }
          },
        legend,
        options,
        ctx
      );
      setCurrentImage({
        iData: ctx.getImageData(0, 0, canvas.width, canvas.height),
        size: { width: canvas.width, height: canvas.height }
      });
    }

    // Start next generation with the legend
    for (let i = 0; i < MAX_ACTIVE_WORKERS; i++) {
      const worker = workersRef.current[i];
      if (!worker) continue;
      const nofCandidates = Math.floor(options.iterations / MAX_ACTIVE_WORKERS) +
        (i < options.iterations % MAX_ACTIVE_WORKERS ? 1 : 0);
      // console.log('Sending enter to worker', i, 'nofCandidates:', nofCandidates, 'options:', options);
      worker.postMessage({
        action: 'enter',
        workerId: i,
        timestamp: Date.now(),
        legend: legend,
        options: options,
        nofCandidates: nofCandidates
      });
    }
    // Reset champions for the next generation
    setChampions({});
  }, [champions]);

  useEffect(() => {
    // Update the current canvas when currentImage changes
    if (currentImage && currentCanvasRef.current) {
      const ctx = currentCanvasRef.current.getContext('2d', { willReadFrequently: true });
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
    // Redraw the selected canvas when selectedImage changes
    if (selectedImage && selectedCanvasRef.current) {
      const ctx = selectedCanvasRef.current.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      if (selectedCanvasRef.current.width !== selectedImage.size.width ||
        selectedCanvasRef.current.height !== selectedImage.size.height) {
        selectedCanvasRef.current.width = selectedImage.size.width;
        selectedCanvasRef.current.height = selectedImage.size.height;
      }
      ctx.putImageData(selectedImage.iData, 0, 0);
    }
  }, [selectedImage]);

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.type === 'number' ? Number(target.value) : target.value;
    const [, subsection, field] = target.name.split('.');

    if (subsection && field) {
      setInputValues(prev => ({
        ...prev,
        font: {
          ...prev.font,
          [subsection]: {
            ...(prev.font[subsection as keyof typeof prev.font] as Record<string, any>),
            [field]: value
          }
        }
      }));
    } else if (subsection) {
      setInputValues(prev => ({
        ...prev,
        font: {
          ...prev.font,
          [subsection]: value
        }
      }));
    } else {
      setInputValues(prev => ({
        ...prev,
        [target.name]: value
      }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    const [, subsection, field] = name.split('.');

    if (subsection && field) {
      setInputValues(prev => ({
        ...prev,
        font: {
          ...prev.font,
          [subsection]: {
            ...(prev.font[subsection as keyof typeof prev.font] as Record<string, any>),
            [field]: value
          }
        }
      }));
    } else if (subsection) {
      setInputValues(prev => ({
        ...prev,
        font: {
          ...prev.font,
          [subsection]: value
        }
      }));
    } else {
      setInputValues(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const options = useMemo<Options>(() => ({
    blocks: inputValues.blocks.split('\n').filter(block => block.trim() !== ''),
    font: {
      family: inputValues.font.family,
      minSize: Number(inputValues.font.minSize),
      maxSize: Number(inputValues.font.maxSize),
      opacity: Number(inputValues.font.opacity),
      bold: inputValues.font.bold === 'true',
    },
    iterations: inputValues.iterations,
    generations: inputValues.generations
  }), [inputValues]);

  const downloadImage = () => {
    if (currentCanvasRef.current) {
      const link = document.createElement("a");
      link.href = currentCanvasRef.current.toDataURL("image/png");
      link.download = "bedri.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const initializeWorkerPool = () => {
    // Guard: only initialize if selectedImage is available
    if (!selectedImage) {
      return;
    }
    // Clear existing arenas if any
    workersRef.current.forEach(arena => {
      if (arena) {
        arena.terminate();
      }
    });
    workersRef.current = [];

    for (let i = 0; i < MAX_ACTIVE_WORKERS; i++) {
      // console.log(`Initializing arena: ${i}`);
      try {
        const arena = new Worker(new URL('./arena.ts', import.meta.url), { type: 'module' });
        arena.onmessage = (e: MessageEvent<WorkerMessage>) => {
          const { action, workerId } = e.data;

          if ('reason' in e.data) {
            // console.log(`Arena ${workerId}: Error - ${e.data.reason}`);
            return;
          }

          if (workerId === undefined) {
            // console.log('Arena message received without ID');
            return;
          }

          switch (action) {
            case 'ready':
              // console.log(`Arena ${workerId} initialized and ready.`);
              setProcessStats(prevState => ({
                ...(prevState || {}),
                [workerId]: {
                  total: 0,
                  processed: 0
                }
              }));
              break;
            case 'initialized':
              if (!processing) {
                workersRef.current[workerId]?.postMessage({
                  action: 'battle',
                  timestamp: Date.now(),
                  workerId
                });
              }
              break;
            case 'update':
              const updateMessage = e.data as UpdateMessage & BaseMessage;
              setProcessStats(prevState => ({
                ...(prevState || {}),
                [workerId]: {
                  total: updateMessage.total,
                  processed: updateMessage.processed
                }
              }));
              break;
            case 'done':
              const doneMessage = e.data as DoneMessage & BaseMessage;
              setChampions(prevState => ({
                ...prevState,
                [workerId]: doneMessage.victor.candidate as Candidate
              }));
              break;
            case 'error':
              // console.log(`Arena ${workerId}: Error - ${e.data.reason}`);
              break;
          }
        };

        arena.postMessage({
          action: 'prepare',
          workerId: i,
          selectedImage: selectedImage,
          timestamp: Date.now()
        });
        workersRef.current[i] = arena;
      } catch (error) {
        // console.error(`Failed to initialize arena ${i}:`, error);
      }
    }
  };

  const startProcessing = () => {
    if (processing) {
      return;
    }
    if (!selectedImage) {
      // console.log("Error: Please upload an image first");
      alert("Please upload an image first.");
      return;
    }
    if (!workersRef.current || workersRef.current.length === 0) {
      // console.log("Error: Workers not initialized");
      alert("Workers are not initialized yet.");
      return;
    }
    if (options.blocks.length === 0) {
      // console.log("Error: No text blocks provided");
      alert("Please enter some text first.");
      return;
    }
    if (options.font.minSize >= options.font.maxSize) {
      // console.log("Error: Invalid font size range");
      alert("Minimum font size must be less than maximum font size.");
      return;
    }
    setProcessing(true);
    setCurrentGeneration(0);
    setProcessStats({});
    setChampions({});
    for (let i = 0; i < MAX_ACTIVE_WORKERS; i++) {
      const worker = workersRef.current[i];
      if (!worker) continue;
      const nofCandidates = Math.floor(options.iterations / MAX_ACTIVE_WORKERS) +
        (i < options.iterations % MAX_ACTIVE_WORKERS ? 1 : 0);
      // console.log('Sending enter to worker', i, 'nofCandidates:', nofCandidates, 'options:', options);
      worker.postMessage({
        action: 'enter',
        workerId: i,
        timestamp: Date.now(),
        options: options,
        nofCandidates: nofCandidates
      });
    }
  };

  const stopProcessing = () => {
    // console.log("Processing stopped by user");
    setProcessing(false);
    workersRef.current.forEach(worker => {
      worker.terminate();
    });
    initializeWorkerPool();
  };

  const reset = () => {
    setProcessing(false);
    setCurrentGeneration(0);
    setProcessStats({});
    setChampions({});
    setCurrentImage(null);
    workersRef.current.forEach(worker => {
      worker.terminate();
    });
    initializeWorkerPool();
  };

  return (
    <Wrapper>
      <StyledWindow>
        <WindowHeader>
          <span>Bedri</span>
        </WindowHeader>
        <WindowContent>
          <List>
            <ListItem>Bedri will generate a text-based representation of the image using the provided text by using genetic algorithms. The name is inspired by the famous painter Bedri Baykam.</ListItem>
            <ListItem>The app is tested with google chrome and might not work with other browsers. Also, mobile devices are not supported.</ListItem>
            <ListItem>The app is open source and the code is available on <a target="_blank" rel="noopener noreferrer" href="https://github.com/miratcan/bedri">GitHub</a>. If you have any feedback, please <a target="_blank" rel="noopener noreferrer" href="https://github.com/miratcan/bedri/issues">open an issue</a>.</ListItem>
            <ListItem>This app will use all of your CPU cores to generate the image. It can drain your battery quickly if you are using a laptop.</ListItem>
            <ListItem>How to use: select an image and enter text lines. Then click on the "Start" button to begin the genetic algorithm. Tweak the options to get better results.</ListItem>
            <ListItem>You can find inspiration from twitter by searching for <a target="_blank" rel="noopener noreferrer" href={`https://x.com/search?q=${encodeURIComponent('#bedriapp')}`}>#bedriapp</a>. Also please post your results with the hashtag <a target="_blank" rel="noopener noreferrer" href={`https://x.com/search?q=${encodeURIComponent('#bedriapp')}`}>#bedriapp</a>.</ListItem>
          </List>
        </WindowContent>
      </StyledWindow>

      <MainContent>
        <InputsContainer>
          <StyledWindow>
            <WindowHeader>
              <span>Image Selection</span>
            </WindowHeader>
            <WindowContent>
              <ImageUpload
                selectedCanvasRef={selectedCanvasRef}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                setCurrentImage={setCurrentImage}
              />
            </WindowContent>
          </StyledWindow>

          <StyledWindow>
            <WindowHeader>
              <span>Text Content</span>
            </WindowHeader>
            <WindowContent>
              <TextContent
                inputValues={inputValues}
                onTextInputChange={handleTextInputChange}
                onSelectChange={handleSelectChange}
              />
            </WindowContent>
          </StyledWindow>
          <StyledWindow>
            <WindowHeader>
              <span>Font Settings</span>
            </WindowHeader>
            <WindowContent>
              <FontSettings
                inputValues={inputValues}
                onTextInputChange={handleTextInputChange}
                onSelectChange={handleSelectChange}
              />
            </WindowContent>
          </StyledWindow>

          <StyledWindow>
            <WindowHeader>
              <span>Processing Settings</span>
            </WindowHeader>
            <WindowContent>
              <ProcessingSettings
                inputValues={inputValues}
                onTextInputChange={handleTextInputChange}
              />
            </WindowContent>
          </StyledWindow>
        </InputsContainer>

        <CanvasContainer>
          <StyledWindow>
            <WindowHeader>
              <span>Preview</span>
            </WindowHeader>
            <WindowContent>
              <StyledCanvas ref={currentCanvasRef} id="currentCanvas" />
            </WindowContent>
          </StyledWindow>

          <StyledWindow>
            <WindowHeader>
              <span>Controls</span>
            </WindowHeader>
            <WindowContent>
              <Controls
                onStart={startProcessing}
                onStop={stopProcessing}
                onReset={reset}
                onDownload={downloadImage}
                totalProcessed={processStats ? Object.values(processStats).reduce((sum, stat) => sum + stat.processed, 0) : 0}
                linesCount={processStats ? Object.values(processStats).reduce((sum, stat) => sum + stat.total, 0) : 0}
              />
            </WindowContent>
          </StyledWindow>
        </CanvasContainer>
      </MainContent>
    </Wrapper>
  );
}
