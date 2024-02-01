import React from 'react'
import './Header.scss'
import { TiSocialFacebook } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";


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

      <div className='hrader__bottom'>
      </div>
    </div>
  )
}

export default Header
