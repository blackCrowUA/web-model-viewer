import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/home/home.page.tsx';
import { ModelViewPage } from './pages/model-view/model-view.page.tsx';

export const PATHS = {
  HOME: '/',
  VIEW: '/view',
};

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path={PATHS.HOME} />
        <Route element={<ModelViewPage />} path={PATHS.VIEW} />
      </Routes>
    </BrowserRouter>
  );
};
