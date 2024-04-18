import { FC, PropsWithChildren } from 'react';

import { Layout as AntLayout } from 'antd';

const { Content } = AntLayout;

export const CustomContent: FC<PropsWithChildren> = ({ children }) => {
  return <Content>{children}</Content>;
};
