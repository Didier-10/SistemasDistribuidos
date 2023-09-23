import React from 'react';
import { createRoot } from 'react-dom/client'
import { defaultTheme } from '../constants/Constants'
import Header from '../components/Header';
import Footer from '../components/Footer'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'


const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <Header />
    <Footer />
  </ThemeProvider>
);

const root = createRoot(document.getElementById('app'));
root.render(<App />);
