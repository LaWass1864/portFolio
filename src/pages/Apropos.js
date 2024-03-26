import React from 'react';
import Navigation from '../components/Navigation';


const Apropos = () => {

  return (
    <main className='apropos-background'>
      <Navigation currentPage='/Apropos' />
      <div className="box">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </main>
  );
};

export default Apropos;
