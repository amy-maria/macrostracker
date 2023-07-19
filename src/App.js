import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import MacroSettings from './pages/MacroSettings.js';
import Dashboard from './pages/Dashboard.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-navbar'>
          <Navbar />
          <div className='App-container'></div>
        </header>
        <Routes>
          <Route exact path='./Home' component={<Home />} />
          <Route path='./pages/Dashboard' component={<Dashboard />} />
          <Route path='./pages/MacroSettings' component={<MacroSettings />} />
          <Route path='./pages/About' component={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
