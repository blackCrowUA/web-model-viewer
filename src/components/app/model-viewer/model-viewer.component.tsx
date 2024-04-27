import './model-viewer.component.css';

import { FC, useEffect, useRef } from 'react';

import { Camera, Loader, OrbitControls, Scene, WebGLRenderer } from 'gsplat';
import isNil from 'lodash.isnil';

import { useFiles } from '../../../hooks/files/files.hook.ts';

import { Background } from '../../core/background/background.component.tsx';

export const ModelViewer: FC = () => {
  const { selectedFile } = useFiles();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isNil(selectedFile)) {
      return;
    }

    const scene = new Scene();
    const camera = new Camera();

    const renderer = new WebGLRenderer(canvasRef.current);
    const controls = new OrbitControls(camera, renderer.canvas);

    const loadFileAndStartRendering = async (): Promise<void> => {
      await Loader.LoadFromFileAsync(selectedFile, scene, (progress) => console.log(`${progress * 100}%`));

      const animate = (): void => {
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();
    };

    loadFileAndStartRendering()
      .then()
      .catch((error) => console.error('Error loading file', error));

    return () => {
      renderer.dispose();
    };
  }, [selectedFile]);

  return (
    <Background>
      <canvas className={'model-viewer-canvas'} ref={canvasRef} />
    </Background>
  );
};
