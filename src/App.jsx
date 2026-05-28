import React from 'react';
import Navbar from './Components/Layout/Navbar';
import Hero from './Components/Sections/Hero';
import About from './Components/Sections/About';
import Skills from './Components/Sections/Skills';
import Projects from './Components/Sections/Projects';
import Services from './Components/Sections/Services';

const App = () => {
  return (
    <div className='min-h-screen bg-black pb-[100vh]'>
        <Navbar></Navbar>
        <main>
          <Hero></Hero>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Services></Services>
        </main>
    </div>
  );
};

export default App;