import './file-loader.component.css';

import { FC, useCallback } from 'react';

import { useFiles } from '../../../hooks/files/files.hook.ts';

import { FileObject } from '../../../types/file';
import { CustomUploadProps, Upload } from '../../core/upload/upload.component.tsx';

import { FileLoaderContent } from './file-loader-content.component.tsx';

export const FileLoader: FC = () => {
  const { files, setFiles } = useFiles();

  const handleFileUpload = useCallback(
    (file: FileObject, fileList: FileObject[]) => {
      //TODO remove
      console.log('FILE LOADER', file, fileList);
      console.log('CONTEXT FILES', files);

      setFiles([...files, file]);

      //Prevent loading file to server
      return false;
    },
    [files, setFiles]
  );

  const handleFileRemove = useCallback(
    (fileToRemove: FileObject) => {
      setFiles(files.filter((f) => f.uid !== fileToRemove.uid));
    },
    [files, setFiles]
  );

  //TODO allow upload only SPLAT\PLY files
  const uploadProps: CustomUploadProps = {
    className: 'upload-component',
    beforeUpload: handleFileUpload,
    onRemove: handleFileRemove,
  };

  return (
    <div className={'file-loader-component-layout'}>
      <Upload draggerProps={uploadProps}>
        <FileLoaderContent />
      </Upload>
    </div>
  );
};
