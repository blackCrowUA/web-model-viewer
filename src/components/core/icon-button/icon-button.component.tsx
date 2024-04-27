import React, { FC } from 'react';

import { Button, ButtonProps } from '../button/button.component.tsx';

interface IconButtonProps extends ButtonProps {
  icon?: React.ReactNode;
}

export const IconButton: FC<IconButtonProps> = (props) => {
  return <Button {...props} />;
};
