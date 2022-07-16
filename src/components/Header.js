import React from 'react';
import logo from '../assets/images/react-logo.png';

function Header() {
  return (
    <header>
      <nav className="nav">
        <div className='titleArea'>
          <img src={logo} className="logo" />
          <h1 className="title">ReactFacts</h1>
        </div>
        <h1 className="desc">React Course - Project 1</h1>
      </nav>
    </header>
  );
}

export default Header;
