import { createContext, FC, PropsWithChildren, useState } from 'react';

import isNil from 'lodash.isnil';

import { FileObject } from '../../types/file';

export interface FilesContextProperties {
  files: FileObject[];
  setFiles: (files: FileObject[]) => void;
  selectedFile: FileObject | null;
  setSelectedFile: (file: FileObject | null) => void;
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

  const handleSetSelectedFile = (file: FileObject | null): void => {
    if (!isNil(file) && file.uid === selectedFile?.uid) {
      return;
    }
    setSelectedFile(file);
  };

  return (
    <FilesContext.Provider value={{ files, setFiles, selectedFile, setSelectedFile: handleSetSelectedFile }}>
      {children}
    </FilesContext.Provider>
  );
};
