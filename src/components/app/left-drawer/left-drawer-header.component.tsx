import './left-drawer-header.component.css';

import { FC } from 'react';

import { CloseOutlined } from '@ant-design/icons';

import { Button } from '../../core/button/button.component.tsx';
import { IconButton } from '../../core/icon-button/icon-button.component.tsx';
import { Space } from '../../core/space/space.component.tsx';

interface LeftDrawerHeaderProps {
  handleDrawerOpen?: () => void;
  handleFileManagerOpen?: () => void;
}

export const LeftDrawerHeader: FC<LeftDrawerHeaderProps> = ({ handleDrawerOpen, handleFileManagerOpen }) => {
  return (
    <Space>
      <Button type={'default'} onClick={handleFileManagerOpen}>
        File Manager
      </Button>
      <IconButton icon={<CloseOutlined />} type={'default'} onClick={handleDrawerOpen} />
    </Space>
  );
};
