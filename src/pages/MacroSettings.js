import React, { useState } from 'react';

export default function MacroSettings() {
  let updateCaloriesHandler = () => {
    console.log();
  };
  return (
    <div className='App'>
      <div className='Settings-form_container'>
        <div className='Settings-form_section-calories'>
          <form>
            <input type='text' placeholder='Enter total calories' />
            <button type='submit' onChange={updateCaloriesHandler}>
              Submit
            </button>

            <input type='text' placeholder='Enter g of protein' />
            <button type='submit'>Submit</button>

            <input type='text' placeholder='Enter g of fat' />
            <button type='submit'>Submit</button>

            <input type='text' placeholder='Enter g of carbs' />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
