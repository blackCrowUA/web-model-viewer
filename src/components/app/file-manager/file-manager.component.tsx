import { FC } from 'react';

import { FileLoader } from '../file-loader/file-loader.component.tsx';
import { FilePicker } from '../file-picker/file-picker.component.tsx';

export const FileManager: FC = () => {
  return (
    <>
      <FileLoader />
      <FilePicker />
    </>
  );
};
