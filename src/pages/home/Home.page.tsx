import './Home.page.css';

import { FC } from 'react';

import { FileLoader } from '../../app/components/file-loader/file-loader.component.tsx';
import { Background } from '../../components/background/background.component.tsx';
import { CustomContent } from '../../components/content/content.component.tsx';

export const HomePage: FC = () => {
  return (
    <Background>
      <CustomContent>
        <FileLoader />
      </CustomContent>
    </Background>
  );
};
