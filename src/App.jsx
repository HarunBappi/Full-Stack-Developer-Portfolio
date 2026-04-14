import React from 'react';
import Navbar from './Components/Layout/Navbar';
import Hero from './Components/Sections/Hero';

const App = () => {
  return (
    <div className='min-h-screen bg-black'>
        <Navbar></Navbar>
        <main>
          <Hero></Hero>
        </main>
    </div>
  );
};

export default App;