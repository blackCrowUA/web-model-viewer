import { FC } from 'react';

import { Drawer as AntDrawer, DrawerProps } from 'antd';

export const Drawer: FC<DrawerProps> = (props) => {
  return <AntDrawer {...props} />;
};
