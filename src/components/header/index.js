import React from 'react'
import Logo from '../../assets/FullColorLogo.svg';
import './style.css';

export default function index() {
  return (

    <div className='header'>
        <img src={Logo} alt="logo" className="logo" />
     
    </div>
  );
}
