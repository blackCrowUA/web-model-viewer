import './file-loader.component.css';

import { FC, useCallback } from 'react';

import { notification } from 'antd';

import { useFiles } from '../../../hooks/files/files.hook.ts';

import { FileObject } from '../../../types/file';
import { CustomUploadProps, Upload } from '../../core/upload/upload.component.tsx';

import { FileLoaderContent } from './file-loader-content.component.tsx';

const ACCEPTED_FILE_TYPES = ['.splat', '.ply'];

export const FileLoader: FC = () => {
  const { files, setFiles } = useFiles();
  const [api, contextHolder] = notification.useNotification();

  const openErrorNotification = (): void => {
    api.error({
      message: 'File type not supported',
      description: `Please upload only ${ACCEPTED_FILE_TYPES.join(' ')} file types`,
      duration: 3,
      placement: 'top',
    });
  };

  const handleFileUpload = useCallback(
    (file: FileObject) => {
      if (ACCEPTED_FILE_TYPES.some((type) => file.name.endsWith(type))) {
        setFiles([...files, file]);

        //Prevent loading file to server
        return false;
      }
      openErrorNotification();
      return false;
    },
    //eslint-disable-next-line
    [files, setFiles]
  );

  const handleFileRemove = useCallback(
    (fileToRemove: FileObject) => {
      setFiles(files.filter((f) => f.uid !== fileToRemove.uid));
    },
    [files, setFiles]
  );

  const uploadProps: CustomUploadProps = {
    className: 'upload-component',
    beforeUpload: handleFileUpload,
    onRemove: handleFileRemove,
    fileList: files,
    showUploadList: false,
    accept: '.splat,.ply',
  };

  return (
    <div className={'file-loader-component-layout'}>
      {contextHolder}
      <Upload draggerProps={uploadProps}>
        <FileLoaderContent />
      </Upload>
    </div>
  );
};
