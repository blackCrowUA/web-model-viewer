import './left-drawer.component.css';

import { FC, useEffect, useState } from 'react';

import { CloseOutlined, SettingTwoTone } from '@ant-design/icons';

import { useFiles } from '../../../hooks/files/files.hook.ts';

import { Drawer } from '../../core/drawer/drawer.component.tsx';
import { IconButton } from '../../core/icon-button/icon-button.component.tsx';
import { Modal } from '../../core/modal/modal.component.tsx';
import { FileManager } from '../file-manager/file-manager.component.tsx';

import { LeftDrawerHeader } from './left-drawer-header.component.tsx';

export const LeftDrawer: FC = () => {
  const { selectedFile } = useFiles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFileManagerOpen, setIsFileManagerOpen] = useState(false);

  useEffect(() => {
    setIsFileManagerOpen(false);
  }, [selectedFile]);

  const handleDrawerOpen = (): void => setIsDrawerOpen(!isDrawerOpen);

  const handleFileManagerOpen = (): void => {
    setIsFileManagerOpen(true);
    setIsDrawerOpen(false);
  };

  return (
    <>
      {isDrawerOpen ? null : (
        <IconButton
          className={'left-drawer-open-button'}
          icon={<SettingTwoTone />}
          size={'large'}
          onClick={handleDrawerOpen}
        />
      )}
      {isFileManagerOpen ? (
        <Modal
          className={'left-drawer-main-file-manager'}
          footer={null}
          open={isFileManagerOpen}
          width={'54%'}
          closeIcon={
            <IconButton icon={<CloseOutlined />} type={'default'} onClick={() => setIsFileManagerOpen(false)} />
          }
        >
          <FileManager />
        </Modal>
      ) : null}
      <Drawer
        forceRender
        className={'left-drawer-main'}
        closable={false}
        closeIcon={false}
        extra={<LeftDrawerHeader handleDrawerOpen={handleDrawerOpen} handleFileManagerOpen={handleFileManagerOpen} />}
        mask={false}
        open={isDrawerOpen}
        placement={'left'}
        title={'View Settings'}
        onClose={handleDrawerOpen}
      />
    </>
  );
};
