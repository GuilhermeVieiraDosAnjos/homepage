import { useState } from 'react';
import './App.css';

import Menu from './components/menu/Menu.jsx';
import Main from './components/main/Main.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <>
      <Menu />
      <Main />
      <Footer />
    </>
  );
}

export default App;
