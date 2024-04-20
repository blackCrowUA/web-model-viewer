import './file-picker.component.css';

import { FC } from 'react';

import { useFiles } from '../../../hooks/files/files.hook.ts';

import { FileObject } from '../../../types/file';
import { List, ListItem, ListProps } from '../../core/list/list.component.tsx';

export const FilePicker: FC = () => {
  const { files } = useFiles();

  const listProps: ListProps<FileObject> = {
    className: 'file-picker-component',
    size: 'default',
    bordered: true,
    dataSource: files,
    renderItem: (item: FileObject) => (
      <ListItem>
        <ListItem.Meta description={item.size} title={item.name} />
      </ListItem>
    ),
  };

  return <List {...listProps} />;
};
