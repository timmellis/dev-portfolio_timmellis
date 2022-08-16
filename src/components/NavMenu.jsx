import React from 'react';
import {useNavigate, Link} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'
import splitlogo64 from '../assets/split-logo-64.png' 
import Tlogo from '../assets/T-logo.png' 
import Tkeylogo from '../assets/T-key-logo.png' 

const NavMenu = () => {

  const navigate = useNavigate()

  const scrollTo = (e, ref) => {
    e.preventDefault()
    let time = 50
    if(window.location.href !== window.location.origin && window.location.href !== window.location.origin+"/") {
      time=100 
      navigate("/")
      
    }
    window.setTimeout(()=>document.getElementById(ref).scrollIntoView(),time)
  }

  return (
    <Navbar collapseOnSelect expand="md" variant='dark'>
      <Container>
        <Navbar.Brand>
          <span onClick={()=>navigate('/') }>
            <img alt='T icon' src={Tkeylogo} height='25px' style={{transform:'translateY(-25%)', opacity:'90%'}} /> im Ellis
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse className='justify-content-end' id='responsive-navbar-nav'>
          <Nav className='justify-content-end align-items-center nav-container'>

            <Nav.Link id='nav-home' onClick={(e)=>scrollTo(e, 'home') }>Home</Nav.Link>
            <Nav.Link id='nav-about'  onClick={(e)=>scrollTo(e, 'about') }>About</Nav.Link>
            <Nav.Link id='nav-skills'  onClick={(e)=>scrollTo(e, 'skills')}>Skills</Nav.Link>
            <Nav.Link id='nav-projects' onClick={(e)=>scrollTo(e, 'projects')}>Projects</Nav.Link>
            <Nav.Link id='nav-contact' onClick={(e)=>scrollTo(e, 'contact')}>Contact</Nav.Link>
            <Nav.Link id='nav-resume' onClick={(e)=>scrollTo(e, 'contact')}>Resume</Nav.Link>
            <Nav.Link id='nav-blog' onClick={(e)=>navigate("/blog")}>Blog</Nav.Link>
            <Container>

              {/* github svg */}
              <span onClick={()=>window.open('https://www.github.com/timmellis', '_blank')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32"><path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/></svg>
              </span>
              {/* linkedin svg */}
              <span onClick={()=>window.open('https://www.linkedin.com/in/tim-m-ellis', '_blank')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" role="img"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </span>


            </Container>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavMenu;