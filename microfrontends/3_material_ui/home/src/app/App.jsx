import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client'
import BasicAppBar from '../components/basic-app-bar';
import theme from '../styles/theme';
import BasicAppGrid from '../components/basic-app-grid';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BasicAppBar />
    <BasicAppGrid />
  </ThemeProvider>  
);

const root = createRoot(document.getElementById('app'));
root.render(<App />)
