import React, { useEffect, useState } from 'react';
import Logo from '../Assets/ganajo-logo.png';
import { MdOutlineShoppingCart } from "react-icons/md";
import commonNavItems from './commonUserNavBarItems.ts';
import adminNavItens from './adminUserNavBarItems.ts';
import './Navbar.css';
import { NavBarLink } from '../DTOs/NavBarLink';

const Navbar = () => {

  const [isAdmin, setIsAdmin] = useState<boolean>();
  const [navItems, setNavItems] = useState<NavBarLink[]>();

  useEffect(() => {
    setIsAdmin(true);
    setNavItems(isAdmin ? adminNavItens : commonNavItems);
  }, [isAdmin])

  return (
    <nav>
        <div className='container nav_container'>
          <a href="/" className='nav_logo'>
              <img src={Logo} alt="Logo"/>
          </a>
          <ul className='nav_menu'>
            {
              navItems?.map(item => <li key={item.Id}><a href={item.Link}>{item.Title}</a></li>)
            }
          </ul>
          <button className="theme_icon"><MdOutlineShoppingCart/></button>
        </div>
    </nav>
  )
}

export default Navbar