import './App.css';

import { FC } from 'react';

import { AppContext } from './context/app.context.tsx';
import { Router } from './Router.tsx';

export const App: FC = () => {
  return (
    <AppContext>
      <Router />
    </AppContext>
  );
};
