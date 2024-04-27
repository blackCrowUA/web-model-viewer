import './model-viewer.component.css';

import { FC, useEffect, useRef } from 'react';

import { Camera, Loader, OrbitControls, Scene, WebGLRenderer } from 'gsplat';
import isNil from 'lodash.isnil';

import { useFiles } from '../../../hooks/files/files.hook.ts';

export const ModelViewer: FC = () => {
  const { files } = useFiles();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isNil(files[0])) {
      return;
    }

    const scene = new Scene();
    const camera = new Camera();

    const renderer = new WebGLRenderer(canvasRef.current);
    const controls = new OrbitControls(camera, renderer.canvas);

    Loader.LoadFromFileAsync(files[0], scene, (progress) => console.log(`${progress * 100}%`));

    const animate = (): void => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, [files]);

  return <canvas className={'model-viewer-canvas'} ref={canvasRef} />;
};
