import { FC } from 'react';

import { Space as AntSpace, SpaceProps as AntSpaceProps } from 'antd';

export const Space: FC<AntSpaceProps> = (props) => {
  const { children } = props;
  return <AntSpace {...props}>{children}</AntSpace>;
};
