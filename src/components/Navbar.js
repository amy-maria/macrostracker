import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='nav'>
      <ul className='nav-links'>
        <li>
          <Link to='./pages/Home' className='Navbar-home_link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='./pages/MacroSettings.js' className='Navbar-settings_link'>
            Settings
          </Link>
        </li>
        <li>
          <Link
            to='./pages/Dashboard.js'
            className='Navbar-weeklyDashboard_link'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to='./pages/About.js' className='Navbar-about_link'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
