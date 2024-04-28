import { createContext, FC, PropsWithChildren, useState } from 'react';

import { WebGLRenderer } from 'gsplat';

export interface ModelViewContextProperties {
  renderer?: WebGLRenderer;
  setRenderer: (renderer: WebGLRenderer) => void;
}

export const ModelViewContext = createContext<ModelViewContextProperties>({
  renderer: undefined,
  setRenderer: () => {},
});

ModelViewContext.displayName = 'ModelViewContext';

export const ModelViewContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [renderer, setRenderer] = useState<WebGLRenderer | undefined>(undefined);

  return <ModelViewContext.Provider value={{ renderer, setRenderer }}>{children}</ModelViewContext.Provider>;
};
