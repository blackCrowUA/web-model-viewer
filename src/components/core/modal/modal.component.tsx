import { FC } from 'react';

import { Modal as AntModal, ModalProps } from 'antd';

export const Modal: FC<ModalProps> = (props) => {
  const { children } = props;
  return <AntModal {...props}>{children}</AntModal>;
};
