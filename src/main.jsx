import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import App from './App.jsx';
import { store } from './store/index.js';

const root = createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6366F1', // indigo
    },
    secondary: {
      main: '#EC4899', // pink
    },
    background: {
      default: '#0F172A',
      paper: '#020617',
    },
    text: {
      primary: '#E5E7EB',
      secondary: '#9CA3AF',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);