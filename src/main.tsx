import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import ThemeProvider from './shared/lib/theme/ThemeProvider.tsx';
import { Provider } from 'react-redux';
import { store } from '@/app/providers/store/store.ts';
import { HashRouter } from 'react-router-dom';

const rootElement = ReactDOM.createRoot(document.getElementById('root')!);

rootElement.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
