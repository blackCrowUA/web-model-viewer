import { FC, PropsWithChildren } from 'react';

import { FilesContextProvider } from './files/files.context.tsx';

export const AppContext: FC<PropsWithChildren> = ({ children }) => {
  return <FilesContextProvider>{children}</FilesContextProvider>;
};
