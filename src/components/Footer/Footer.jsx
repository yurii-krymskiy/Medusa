import React from 'react'
import './Footer.scss'
import logo from '../../assets/img/logo2.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-block'>
          <h3 className='footer-title'>La Medusa</h3>
          <p className='footer-desc'>A great place to relax<br /> and enjoy unique seafood cuisine</p>
        </div>
        <div className='footer-block footer-block--border'>
          <img src={logo} alt="logo" className='footer-logo' />
          <div className='footer-socials'>
            <div className='about-section-2-info-bottom-socials'>
              <a href="https://www.facebook.com/restaurantlamedusa">
                <FaFacebook className='footer-icon' />
              </a>
              <a href="https://www.instagram.com/la_medusa_tenerife/">
                <FaInstagram className='footer-icon' />
              </a>
              <a href="https://wa.me/34603839509">
                <FaWhatsapp className='footer-icon' />
              </a>
            </div>
          </div>
        </div>
        <div className='footer-block'>
          <h3 className='footer-title'>Restaurant Hours</h3>
          <p className='footer-hours'>Open : 12:00 - 23:00</p>
          <p className='footer-hours'>Music : 17:30 - 19:30</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
