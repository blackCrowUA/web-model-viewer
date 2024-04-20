import './background.component.css';

import { FC, PropsWithChildren } from 'react';

import { Layout } from '../layout/layout.component.tsx';

export const Background: FC<PropsWithChildren> = ({ children }) => {
  return <Layout className={'background-layout'}>{children}</Layout>;
};
