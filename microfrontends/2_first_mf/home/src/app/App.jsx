import React from "react";
import { createRoot } from 'react-dom/client'
import "../styles/index.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Counter from '../components/Counter';

const App = () => (
  <div>
    <Header />
    <div>
      <Counter />
    </div>
    <Footer />
  </div>
);

const root = createRoot(document.getElementById('app'));
root.render(<App />);
