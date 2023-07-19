import React from 'react';
import Today from '../utilities/FormatDate.js';

export default function Home() {
  return (
    <div>
      <div className='Home-date'>
        <Today />
      </div>
      <div className='Home-meal'>
        Record Daily Meals<button>Daily Meals</button>
      </div>
      <div className='Home-water'>
        Record Water <button>Water</button>
      </div>

      <div className='Home-footer'>Built by Amy Rowell</div>
    </div>
  );
}
