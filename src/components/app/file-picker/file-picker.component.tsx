import './file-picker.component.css';

import { FC, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import { useFiles } from '../../../hooks/files/files.hook.ts';

import { formatFileSize } from '../../../utils/file-size/format-file-size.ts';

import { PATHS } from '../../../Router.tsx';
import { FileObject } from '../../../types/file';
import { Button } from '../../core/button/button.component.tsx';
import { List, ListItem, ListProps } from '../../core/list/list.component.tsx';

export const FilePicker: FC = () => {
  const { files, setFiles, setSelectedFile } = useFiles();
  const navigate = useNavigate();

  const handleFileRemove = useCallback(
    (fileToRemove: FileObject) => {
      //TODO remove
      console.log('REMOVE FILE', fileToRemove);
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
