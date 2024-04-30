import './file-picker.component.css';

import { FC, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import { PLYLoader, Scene } from 'gsplat';

import { useFiles } from '../../../hooks/files/files.hook.ts';

import { getFileTypeFromName } from '../../../utils/file/file-type.util.ts';
import { formatFileSize } from '../../../utils/file/format-file-size.ts';

import { PATHS } from '../../../Router.tsx';
import { FileObject } from '../../../types/file';
import { Button } from '../../core/button/button.component.tsx';
import { List, ListItem, ListProps } from '../../core/list/list.component.tsx';

export const FilePicker: FC = () => {
  const { files, setFiles, setSelectedFile } = useFiles();
  const navigate = useNavigate();

  const handleFileRemove = useCallback(
    (fileToRemove: FileObject) => {
      setFiles(files.filter((f) => f.uid !== fileToRemove.uid));
    },
    [files, setFiles]
  );

  const handleFileView = useCallback(
    (fileToView: FileObject) => {
      setSelectedFile(fileToView);
      navigate(PATHS.VIEW);
    },
    //eslint-disable-next-line
    [navigate]
  );

  const handleFileConvert = (fileToConvert: FileObject): void => {
    const scene = new Scene();

    const loadModel = async (): Promise<void> => {
      await PLYLoader.LoadFromFileAsync(fileToConvert, scene);
      scene.saveToFile('model.splat');
    };

    loadModel().then();
  };

  const listProps: ListProps<FileObject> = {
    className: 'file-picker-component',
    size: 'default',
    bordered: true,
    dataSource: files,
    renderItem: (item: FileObject) => (
      <ListItem className={'file-picker-component-list'}>
        <ListItem.Meta description={`File size: ${formatFileSize(item.size)}`} title={item.name} />
        <div className={'file-picker-component-list-buttons'}>
          <Button onClick={() => handleFileView(item)}>View</Button>
          {getFileTypeFromName(item.name) === 'ply' && (
            <Button onClick={() => handleFileConvert(item)}>Convert to SPLAT</Button>
          )}
          <Button danger onClick={() => handleFileRemove(item)}>
            Remove
          </Button>
        </div>
      </ListItem>
    ),
    locale: { emptyText: 'No models loaded' },
  };

  return <List {...listProps} />;
};
