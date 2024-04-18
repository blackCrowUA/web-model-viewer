import { FC } from 'react';

import { FileAddTwoTone } from '@ant-design/icons';

export const FileLoaderContent: FC = () => {
  return (
    <div>
      <h1>
        <FileAddTwoTone />
      </h1>
      <p>Upload your file here</p>
    </div>
  );
};
