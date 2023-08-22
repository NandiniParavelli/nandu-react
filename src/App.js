import React from 'react';
import Navbar from './components/Navbar';
// import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Skill from './components/Skill';
import About from './components/About';
import Projects from './components/Projects';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Projects/>
    </>

  );
}

export default App;
