import './file-loader.component.css';

import { FC } from 'react';

import { Upload } from '../../../components/upload/upload.component.tsx';

import { FileLoaderContent } from './file-loader-content.component.tsx';

export const FileLoader: FC = () => {
  return (
    <div className={'file-loader-component-layout'}>
      <Upload draggerProps={{ className: 'upload-component' }}>
        <FileLoaderContent />
      </Upload>
    </div>
  );
};
