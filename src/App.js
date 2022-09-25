import React, { useState } from 'react';
import Main from './components/Main';
import Navigation from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Main />
        <Projects />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
