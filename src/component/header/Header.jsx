import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <ul className='navlink'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </div>
  );
};

export default Header