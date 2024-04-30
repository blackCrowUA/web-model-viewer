import './home.page.css';

import { FC, useEffect, useState } from 'react';

import { LoadingOutlined } from '@ant-design/icons';

import { FileManager } from '../../components/app/file-manager/file-manager.component.tsx';
import { Background } from '../../components/core/background/background.component.tsx';
import { CustomContent } from '../../components/core/content/content.component.tsx';
import { Spinner } from '../../components/core/spiner/spinner.component.tsx';

import { useGetDefaultFile } from '../../hooks/default-file/get-default-file.hook.ts';
import { useFiles } from '../../hooks/files/files.hook.ts';

export const HomePage: FC = () => {
  const { setFiles } = useFiles();
  const { data, isLoading, isError } = useGetDefaultFile();
  const [isDefaultFileAdded, setIsDefaultFileAdded] = useState(false);

  useEffect(() => {
    if (!isError && !isLoading && data && !isDefaultFileAdded) {
      data.forEach((file) => (file.uid = file.name));
      setFiles([...data]);
      setIsDefaultFileAdded(true);
    }
  }, [data, isDefaultFileAdded, isError, isLoading, setFiles]);

  return (
    <Background>
      {!isDefaultFileAdded && isLoading ? (
        <Spinner
          fullscreen
          className={'home-page-spinner'}
          indicator={<LoadingOutlined style={{ fontSize: 74 }} />}
          size={'large'}
          tip={'Loading default SPLAT model'}
        />
      ) : (
        <CustomContent>
          <FileManager />
        </CustomContent>
      )}
    </Background>
  );
};
