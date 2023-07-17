import React from 'react';

export default function MacroSettings() {
  return (
    <div className='Settings-form_container'>
      <div className='Settings-form_section-calories'>
        <form>
          <input type='text' placeholder='Enter total calories'>
            <button type='submit'>Submit</button>
          </input>
        </form>
      </div>
    </div>
  );
}
