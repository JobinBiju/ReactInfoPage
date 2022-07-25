import React, { useState } from 'react';
import logo from '../assets/images/react-logo.png';

function MainContent() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="main">
      <h1>Fun facts about React</h1>
      <ul className="mainList">
        <li>Was first introduced in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over {count}K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, including mobile apps</li>
      </ul>
      <button className="count-btn" onClick={incrementCount}>
        <img src={logo} className="logo-bg" />
      </button>
    </div>
  );
}

export default MainContent;
