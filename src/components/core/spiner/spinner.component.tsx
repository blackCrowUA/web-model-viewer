import { FC } from 'react';

import { Spin, SpinProps } from 'antd';

export const Spinner: FC<SpinProps> = (props) => {
  return <Spin {...props} />;
};
