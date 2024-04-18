import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/home/Home.page.tsx';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};
