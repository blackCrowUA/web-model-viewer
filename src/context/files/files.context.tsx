import { createContext, FC, PropsWithChildren, useState } from 'react';

import { FileObject } from '../../types/file';

export interface FilesContextProperties {
  files: FileObject[];
  setFiles: (files: FileObject[]) => void;
  selectedFile: FileObject | null;
  setSelectedFile: (file: FileObject) => void;
}

export const FilesContext = createContext<FilesContextProperties>({
  files: [],
  setFiles: () => {},
  selectedFile: null,
  setSelectedFile: () => {},
});

export const FilesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [files, setFiles] = useState<FileObject[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileObject | null>(null);

  return (
    <FilesContext.Provider value={{ files, setFiles, selectedFile, setSelectedFile }}>{children}</FilesContext.Provider>
  );
};
