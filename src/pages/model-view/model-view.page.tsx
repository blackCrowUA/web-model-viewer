import { FC } from 'react';

import { LeftDrawer } from '../../components/app/left-drawer/left-drawer.component.tsx';
import { ModelViewer } from '../../components/app/model-viewer/model-viewer.component.tsx';

export const ModelViewPage: FC = () => {
  return (
    <>
      <LeftDrawer />
      <ModelViewer />
    </>
  );
};
