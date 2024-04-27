import './left-drawer.component.css';

import { FC, useState } from 'react';

import { SettingTwoTone } from '@ant-design/icons';

import { Drawer } from '../../core/drawer/drawer.component.tsx';
import { IconButton } from '../../core/icon-button/icon-button.component.tsx';

export const LeftDrawer: FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => setOpen(!open);

  return (
    <>
      {open ? null : (
        <IconButton
          className={'left-drawer-open-button'}
          icon={<SettingTwoTone />}
          size={'large'}
          onClick={handleOpen}
        />
      )}
      <Drawer
        closable
        forceRender
        className={'left-drawer-main'}
        mask={false}
        open={open}
        placement={'left'}
        onClose={handleOpen}
      />
    </>
  );
};
