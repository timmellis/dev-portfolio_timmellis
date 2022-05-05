import './App.css';
//import Header from './Header'
// import Home from './Home'
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <main className="App-main">
        <Home />
        <About id='about' />
        <Projects id='projects' />
        <Resume id='resume' />
        <Contact id='contact' />

      </main>

      <footer className="App-footer">
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

export default App;
