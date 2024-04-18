import { FC, PropsWithChildren } from 'react';

import { Layout as AntLayout } from 'antd';

interface LayoutProps extends PropsWithChildren {
  className?: string;
  hasSider?: boolean;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children, hasSider, className } = props;
  return (
    <AntLayout className={className} hasSider={hasSider}>
      {children}
    </AntLayout>
  );
};
