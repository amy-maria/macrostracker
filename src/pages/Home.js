import React from 'react';
import Today from '../utilities/FormatDate.js';

export default function Home() {
  return (
    <div>
      <div className='Home-date'>
        <Today />
      </div>
      <div className='Home-meal'>Daily Meal</div>
      <div className='Home-water'>Daily Water</div>
      <div className='Home-prgress_bar'>Daily Progress</div>
      <div className='Home-footer'>Built by Amy Rowell</div>
    </div>
  );
}
