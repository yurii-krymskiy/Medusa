import React, { useState, useEffect } from 'react';
import './HeaderMobile.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../../assets/img/logo.png';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (menuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`header-mobile ${menuOpen ? 'menu-open' : ''}`}>
      <div className='header-mobile-content'>
        <img src={logo} alt="logo" className='logo' />
        <div>
          <RxHamburgerMenu className='icon-burger' onClick={toggleMenu} />
        </div>
        <button className='header-mobile-button'>BOOK NOW</button>
      </div>
      <div className={`menu ${menuOpen ? 'open' : 'closed'}`}>
        <IoIosCloseCircleOutline className='icon-close' onClick={toggleMenu} />
        <div className='menu-container'>
          <nav className='menu-nav'>
            <ul className='menu-list'>
              <li>
                <Link to="/about" className='menu-link' onClick={closeMenu}>About</Link>
              </li>
              <li>
                <Link to="/menu" className='menu-link' onClick={closeMenu}>Menu</Link>
              </li>
              <li>
                <Link to="/gallery" className='menu-link' onClick={closeMenu}>Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className='menu-link' onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
