import { FC } from 'react';

import { LeftDrawer } from '../../components/app/left-drawer/left-drawer.component.tsx';
import { ModelViewer } from '../../components/app/model-viewer/model-viewer.component.tsx';
import { Background } from '../../components/core/background/background.component.tsx';

import { useFiles } from '../../hooks/files/files.hook.ts';

export const ModelViewPage: FC = () => {
  const { selectedFile } = useFiles();

  return (
    <Background>
      <LeftDrawer />
      {selectedFile && <ModelViewer selectedFile={selectedFile} />}
    </Background>
  );
};
