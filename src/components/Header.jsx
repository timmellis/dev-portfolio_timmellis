import React from 'react';
import NavMenu from './NavMenu'

function Header(props) {
  return (
  <div className='header-container'>
    {/* <div className='header-title'>
      <h1>Tim Ellis</h1>
    </div> */}
    <NavMenu />  
  </div>
  );
}

export default Header;