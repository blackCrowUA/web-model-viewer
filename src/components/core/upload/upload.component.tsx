import { FC, PropsWithChildren } from 'react';

import type { UploadProps as AntUploadProps } from 'antd';
import { Upload as AntUpload } from 'antd';

const { Dragger } = AntUpload;

interface UploadProps extends PropsWithChildren {
  draggerProps?: AntUploadProps;
}

export const Upload: FC<UploadProps> = (props) => {
  const { children, draggerProps } = props;

  return <Dragger {...draggerProps}>{children}</Dragger>;
};
