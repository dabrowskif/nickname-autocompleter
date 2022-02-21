import React from 'react';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Toolbar from './components/Toolbar/Toolbar';

import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Toolbar />
      <Home />
    </div>
  );
}

export default App;
