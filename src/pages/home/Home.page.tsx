import './Home.page.css';

import { FC } from 'react';

import { FileLoader } from '../../components/app/file-loader/file-loader.component.tsx';
import { Background } from '../../components/core/background/background.component.tsx';
import { CustomContent } from '../../components/core/content/content.component.tsx';

export const HomePage: FC = () => {
  return (
    <Background>
      <CustomContent>
        <FileLoader />
      </CustomContent>
    </Background>
  );
};
