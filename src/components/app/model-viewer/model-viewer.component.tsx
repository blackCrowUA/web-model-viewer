import './model-viewer.component.css';

import { FC, useEffect, useRef } from 'react';

import { Camera, Loader, OrbitControls, PLYLoader, Scene, Splat, WebGLRenderer } from 'gsplat';

import { useModelView } from '../../../hooks/model-view/model-view.hook.ts';

import { setStopRenderModel } from '../../../utils/canvas-attributes/canvas-attributes.util.ts';
import { getFileTypeFromName } from '../../../utils/file/file-type.util.ts';
import { initModel } from '../../../utils/gsplat/init-model.ts';

import { FileObject } from '../../../types/file';

interface ModelViewerProps {
  selectedFile: FileObject;
}

export const ModelViewer: FC<ModelViewerProps> = ({ selectedFile }) => {
  const { setRenderer, setCamera, setControls, setModel } = useModelView();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const newScene = new Scene();
    const newCamera = new Camera();
    const newRenderer = new WebGLRenderer(canvasRef.current);
    const newControls = new OrbitControls(newCamera, newRenderer.canvas);
    let model: Splat | undefined = undefined;

    const loadFileAndStartRendering = async (): Promise<void> => {
      const fileType = getFileTypeFromName(selectedFile.name);
      if (fileType === 'ply') {
        model = await PLYLoader.LoadFromFileAsync(selectedFile, newScene);
      } else if (fileType === 'splat') {
        model = await Loader.LoadFromFileAsync(selectedFile, newScene);
      }

      if (!model) {
        console.error('Model not loaded');
        return;
      }

      initModel(newRenderer, newCamera, newControls, newScene, model);

      setRenderer(newRenderer);
      setCamera(newCamera);
      setControls(newControls);
      setModel(model);
    };

    setTimeout(loadFileAndStartRendering, 1000);

    return () => {
      setStopRenderModel(newRenderer.canvas);
    };
    //eslint-disable-next-line
  }, [selectedFile]);

  return <canvas className={'model-viewer-canvas'} ref={canvasRef} />;
};
