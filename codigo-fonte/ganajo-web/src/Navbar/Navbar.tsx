import React from 'react';
import Logo from '../Assets/ganajo-logo.png';
import { MdOutlineShoppingCart } from "react-icons/md";
import Data from './data';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <div className='container nav_container'>
          <a href="/" className='nav_logo'>
              <img src={Logo} alt="Logo"/>
          </a>
          <ul className='nav_menu'>
            {
              Data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
            }
          </ul>
          <button className="theme_icon"><MdOutlineShoppingCart/></button>
        </div>
    </nav>
  )
}

export default Navbar