import React from 'react';
import Nav from './Nav'

function Header(props) {
  return (
  <div className='header-container'>
    <div className='header-title'>
      <h1>Tim Ellis</h1>
    </div>
    <Nav />  
  </div>
  );
}

export default Header;