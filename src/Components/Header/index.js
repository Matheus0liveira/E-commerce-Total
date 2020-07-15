import React from 'react';
import { Link } from 'react-router-dom'


import './style.css'
import logo from '../../assets/logo.svg'
import shopping from '../../assets/shopping.svg'

function Header() {
  return (
    <header >
      <div></div>

      <div className="logo">
        <Link to='/'>
          <img width='200px' src={logo} alt="TOTAL" />
        </Link>
      </div>
      <div className="shopping">

        <Link to="/cart">
          <img width='30px' src={shopping} alt="" />
        </Link>

      </div>
    </header>
  );
}

export default Header;