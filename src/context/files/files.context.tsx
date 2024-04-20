import { createContext, FC, PropsWithChildren, useState } from 'react';

import { FileObject } from '../../types/file';

export interface FilesContextProperties {
  files: FileObject[];
  setFiles: (files: FileObject[]) => void;
}

export const FilesContext = createContext<FilesContextProperties>({
  files: [],
  setFiles: () => {},
});

export const FilesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [files, setFiles] = useState<FileObject[]>([]);

  return <FilesContext.Provider value={{ files, setFiles }}>{children}</FilesContext.Provider>;
};
