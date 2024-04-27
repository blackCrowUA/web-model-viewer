import { FC } from 'react';

import { Button as AntButton } from 'antd';
import { BaseButtonProps } from 'antd/es/button/button';

export interface ButtonProps extends BaseButtonProps {
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { type, children, onClick } = props;

  return (
    <AntButton type={type ?? 'primary'} {...props} onClick={onClick}>
      {children}
    </AntButton>
  );
};
