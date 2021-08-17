import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
    <GlobalStyle/>
    <Navbar/>
   <Hero></Hero>
     </Router>
  );
}

export default App;
