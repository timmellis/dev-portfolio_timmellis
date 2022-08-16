import './App.css';
//import Header from './Header'
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import PortfolioHome from './pages/PortfolioHome'
import BlogHome from './pages/BlogHome'


function App() {

  
  return (
    <Routes>
      <Route path="/" element={ <PortfolioHome /> } />
      <Route path="/blog/*" element={ < BlogHome /> } />
    </Routes>
  );
}

export default App;
