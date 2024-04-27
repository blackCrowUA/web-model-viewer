import { useContextSafely } from '../../utils/context/use-context-safely.util.ts';

import { FilesContext, FilesContextProperties } from '../../context/files/files.context.tsx';

export const useFiles = (): FilesContextProperties => {
  const { files, setFiles, selectedFile, setSelectedFile } = useContextSafely(FilesContext);

  return { files, setFiles, selectedFile, setSelectedFile };
};
