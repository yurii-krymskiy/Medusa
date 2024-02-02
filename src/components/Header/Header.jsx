import React from 'react'
import './Header.scss'
import logo from '../../assets/img/logo.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <div className='header'>
      <div className='header__top'>
        <div className='header__top-container'>
          <div className='header__top-container-socials'>
            <p className='header__top-container-title'>Stay Tuned</p>
            <a href="https://wa.me/34603839509" className='icon-container'>
              <FaWhatsapp className='icon' />
            </a>
            <a href="https://www.facebook.com/restaurantlamedusa" className='icon-container'>
              <RiFacebookFill className='icon' />
            </a>
            <a href="https://www.instagram.com/la_medusa_tenerife/" className='icon-container'>
              <FaInstagram className='icon' />
            </a>
          </div>
          <div className='header__top-container-info'>

            <a href="tel:+34603839509" className='icon-container'>
              <PiPhoneCall className='icon' /> <p className='icon-container--text'>+34 603 83 95 90</p>
            </a>

            <a href="https://maps.app.goo.gl/NX39vPdKHZoagKSy5" className='icon-container'>
              <IoLocationOutline className='icon' /> <p className='icon-container--text'>Avenida La Habana 9</p>
            </a>
          </div>
        </div>
      </div>

      <div className='header__bottom'>
        <div className='header__bottom-logo'>
          <img src={logo} alt="logo" className='logo' />
        </div>
        <div className='header__bottom-menu'>
          <nav className='header__bottom-nav'>
            <ul className='header__bottom-list'>
              <li>
                <Link to="/about" className='header__bottom-link'>About</Link>
              </li>
              <li>
                <Link to="/menu" className='header__bottom-link'>Menu</Link>
              </li>
              <li>
                <Link to="/gallery" className='header__bottom-link'>Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className='header__bottom-link'>Contact</Link>
              </li>
            </ul>
          </nav>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Header
