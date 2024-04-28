import './model-viewer.component.css';

import { FC, useEffect, useRef } from 'react';

import { Camera, Loader, OrbitControls, Scene, WebGLRenderer } from 'gsplat';

import { useModelView } from '../../../hooks/model-view/model-view.hook.ts';

import { setStopRenderModel } from '../../../utils/canvas-attributes/canvas-attributes.util.ts';
import { startModelRendering } from '../../../utils/gsplat/model-rendering.util.ts';

import { FileObject } from '../../../types/file';

interface ModelViewerProps {
  selectedFile: FileObject;
}

export const ModelViewer: FC<ModelViewerProps> = ({ selectedFile }) => {
  const { setRenderer } = useModelView();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log('NEW FILE SELECTED', canvasRef.current);

    const newScene = new Scene();
    const newCamera = new Camera();
    const newRenderer = new WebGLRenderer(canvasRef.current);
    const newControls = new OrbitControls(newCamera, newRenderer.canvas);

    const loadFileAndStartRendering = async (): Promise<void> => {
      await Loader.LoadFromFileAsync(selectedFile, newScene, (progress) => console.log(`${progress * 100}%`));

      startModelRendering(newRenderer, newControls, newScene, newCamera);
    };

    setTimeout(loadFileAndStartRendering, 1000);

    setRenderer(newRenderer);

    return () => {
      console.log('cleanup');
      setStopRenderModel(newRenderer.canvas);
    };
    //eslint-disable-next-line
  }, [selectedFile]);

  return <canvas className={'model-viewer-canvas'} ref={canvasRef} />;
};
