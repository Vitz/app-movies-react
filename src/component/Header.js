import React from 'react';
import Nav from './Nav'
import Logo from './Logo'
import Categories from './Categories';


function Header() {
  return (
    <div className="Header">          
      <Nav/>
      <Logo/>
      <Categories/> 
    </div>
  );
}

export default Header;
