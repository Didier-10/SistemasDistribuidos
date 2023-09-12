import React from 'react';
import { createRoot } from 'react-dom/client'
import "../styles/index.css";
import Avatar from '../components/Avatar';
import Header from 'home/Header'
import Footer from 'home/Footer'
import styles from 'home/styles'

const App = () => (
  <div>
    <Header />
    <Avatar />
    <Footer />
  </div>
);
const root = createRoot(document.getElementById('app'));
root.render(<App />);
