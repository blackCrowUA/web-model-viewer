import { createContext, FC, PropsWithChildren, useState } from 'react';

import { Camera, OrbitControls, Splat, WebGLRenderer } from 'gsplat';

export interface ModelViewContextProperties {
  renderer?: WebGLRenderer;
  setRenderer: (renderer: WebGLRenderer) => void;
  controls?: OrbitControls;
  setControls: (controls: OrbitControls) => void;
  camera?: Camera;
  setCamera: (camera: Camera) => void;
  model?: Splat;
  setModel: (model: Splat) => void;
}

export const ModelViewContext = createContext<ModelViewContextProperties>({
  renderer: undefined,
  setRenderer: () => {},
  controls: undefined,
  setControls: () => {},
  camera: undefined,
  setCamera: () => {},
  model: undefined,
  setModel: () => {},
});

ModelViewContext.displayName = 'ModelViewContext';

export const ModelViewContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [renderer, setRenderer] = useState<WebGLRenderer | undefined>(undefined);
  const [controls, setControls] = useState<OrbitControls | undefined>(undefined);
  const [camera, setCamera] = useState<Camera | undefined>(undefined);
  const [model, setModel] = useState<Splat | undefined>(undefined);

  return (
    <ModelViewContext.Provider
      value={{ renderer, setRenderer, camera, setCamera, controls, setControls, model, setModel }}
    >
      {children}
    </ModelViewContext.Provider>
  );
};
