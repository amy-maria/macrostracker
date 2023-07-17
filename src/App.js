import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import { MacroSettings, Home } from './pages/index.js';

function App() {
  return (
    <div className='App'>
      <header className='App-navbar'>
        <Navbar />
        <div className='App-container'></div>
      </header>

      <Home />
    </div>
  );
}

export default App;
