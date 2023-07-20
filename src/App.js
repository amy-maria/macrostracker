import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import MacroSettings from './pages/MacroSettings.js';
import Dashboard from './pages/Dashboard.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProgressBar from './components/ProgressBar.js';

const testData = [
  { bgcolor: '#6a1b9a', completed: 60, name: 'Protein' },
  { bgcolor: '#00695c', completed: 30, name: 'Fats' },
  { bgcolor: '#ef6c00', completed: 53, name: 'Carbs' },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <header className='App-navbar'>
            <Navbar />
            <div className='App-container'></div>
          </header>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='./pages/Dashboard' element={<Dashboard />} />
            <Route
              exact
              path='./pages/MacroSettings'
              element={<MacroSettings />}
            />
            <Route exact path='./pages/About' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>

      <div className='Home-daily_progess'>
        {testData.map((item, idx) => (
          <ProgressBar
            key={idx}
            bgcolor={item.bgcolor}
            completed={item.completed}
          />
        ))}
      </div>
    </>
  );
}

export default App;
