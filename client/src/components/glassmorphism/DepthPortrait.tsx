import { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as bodySegmentation from '@tensorflow-models/body-segmentation';

interface DepthPortraitProps {
  imageUrl: string;
  className?: string;
}

export function DepthPortrait({ imageUrl, className = '' }: DepthPortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const animationFrameRef = useRef<number>();
  const segmenterRef = useRef<bodySegmentation.BodySegmenter>();
  const [imgSrc, setImgSrc] = useState('');

  // Create a CORS-compliant image URL
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;
    
    img.onload = () => {
      // Create a canvas to draw the image and convert to a data URL
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        setImgSrc(canvas.toDataURL('image/jpeg'));
      }
    };
  }, [imageUrl]);

  useEffect(() => {
    const loadModel = async () => {
      try {
        await tf.ready();
        const model = bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation;
        const segmenterConfig: bodySegmentation.MediaPipeSelfieSegmentationMediaPipeModelConfig = {
          runtime: 'mediapipe',
          solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation',
          modelType: 'general'
        };
        segmenterRef.current = await bodySegmentation.createSegmenter(model, segmenterConfig);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };

    loadModel();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (segmenterRef.current) {
        segmenterRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !isHovered) return;

    const processFrame = async () => {
      if (!canvasRef.current || !imageRef.current || !segmenterRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size to match image
      canvas.width = imageRef.current.naturalWidth;
      canvas.height = imageRef.current.naturalHeight;

      // Draw the image
      ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);

      // Get segmentation mask
      const segmentation = await segmenterRef.current.segmentPeople(canvas, {
        flipHorizontal: false,
        multiSegmentation: false,
        segmentBodyParts: true,
      });

      if (segmentation.length > 0) {
        const mask = await bodySegmentation.toBinaryMask(
          segmentation,
          { r: 0, g: 0, b: 0, a: 255 },
          { r: 0, g: 0, b: 0, a: 0 },
          0.5
        );

        // Apply depth effect based on mask
        ctx.globalCompositeOperation = 'source-over';
        
        // Create depth map
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          // Simple depth effect based on y-position
          const y = Math.floor((i / 4) / canvas.width);
          const depth = 1 - (y / canvas.height) * 0.8;
          
          // Apply depth to RGB channels
          data[i] *= depth;     // R
          data[i + 1] *= depth; // G
          data[i + 2] *= depth; // B
          
          // Apply mask alpha
          data[i + 3] = mask.data[i / 4 * 4 + 3];
        }
        
        ctx.putImageData(imageData, 0, 0);
      }

      animationFrameRef.current = requestAnimationFrame(processFrame);
    };

    animationFrameRef.current = requestAnimationFrame(processFrame);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isLoaded, isHovered]);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        ref={imageRef}
        src={imgSrc || imageUrl}  // Fallback to original URL if data URL not ready
        alt="Profile"
        className="w-full h-full object-cover rounded-full"
        onLoad={() => setIsLoaded(true)}
        style={{ display: isHovered ? 'none' : 'block' }}
      />
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
