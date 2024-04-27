import './App.css';

import { FC } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppContext } from './context/app.context.tsx';
import { Router } from './Router.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 2,
    },
  },
});

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext>
        <Router />
      </AppContext>
    </QueryClientProvider>
  );
};
