import React, { useState } from 'react';
import Main from './components/Main';
import Navigation from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Buttons from './components/Buttons';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import './App.css';

function App() {

  return (
      <div className="App">
        {/* <Routes>
          <Route path="/about" element= { <About /> } />
          <Route path="/contact" element= { <Buttons /> } />
          <Route path="/projects" element = { <Projects /> } />
        </Routes> */}
          
          <Navigation />
          <Main />
          <Buttons />
          <About />
          <Skills />
          <Projects />
          <Footer />
          

      </div>
  );
}

export default App;
library.add(fab, fas, far)

