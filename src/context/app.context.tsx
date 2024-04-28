import { FC, PropsWithChildren } from 'react';

import { FilesContextProvider } from './files/files.context.tsx';
import { ModelViewContextProvider } from './model-view/model-view.context.tsx';

export const AppContext: FC<PropsWithChildren> = ({ children }) => {
  return (
    <FilesContextProvider>
      <ModelViewContextProvider>{children}</ModelViewContextProvider>
    </FilesContextProvider>
  );
};
