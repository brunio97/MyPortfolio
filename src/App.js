import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner/>
     <About />
     <Skills />
     <Projects />
     
     <Footer />
    </div>

  );
}

export default App;
