import React from 'react';
import Navbar from './Components/Layout/Navbar';
import Hero from './Components/Sections/Hero';
import About from './Components/Sections/About';
import Skills from './Components/Sections/Skills';
import Projects from './Components/Sections/Projects';

const App = () => {
  return (
    <div className='min-h-screen bg-black pb-[100vh]'>
        <Navbar></Navbar>
        <main>
          <Hero></Hero>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
        </main>
    </div>
  );
};

export default App;