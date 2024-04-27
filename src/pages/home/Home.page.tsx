import './Home.page.css';

import { FC } from 'react';

import { FileLoader } from '../../components/app/file-loader/file-loader.component.tsx';
import { FilePicker } from '../../components/app/file-picker/file-picker.component.tsx';
import { ModelViewer } from '../../components/app/model-viewer/model-viewer.component.tsx';
import { Background } from '../../components/core/background/background.component.tsx';
import { CustomContent } from '../../components/core/content/content.component.tsx';

export const HomePage: FC = () => {
  return (
    <Background>
      <CustomContent>
        <FileLoader />
        <FilePicker />
        <ModelViewer />
      </CustomContent>
    </Background>
  );
};
