import React from 'react'
import './About.scss'
import '../Header/Header.scss'
import img1 from '../../assets/img/about-section-2.jpeg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";


const About = () => {
  return (
    <div className='about'>
      <div className='about-section-1'>
        <div className='about-section-1-title-container'>
          <h1 className='about-section-1-title'>Feel the taste<br /> of Tenerife</h1>
        </div>
        <div className='about-section-1-block'></div>
      </div>
      <div className='about-section-2'>
        <div className='about-section-2-img-container'>
          <img src={img1} alt="" className='about-section-2-img' />
        </div>
        <div className='about-section-2-info'>
          <p className='about-section-2-info-title-1'>Restaurant & Bar</p>
          <h2 className='about-section-2-info-title-2'>La Medusa &<br /> Restaurant</h2>
          <p className='about-section-2-info-desc'>This is not just a restaurant where you can eat delicious food. This is a place of beauty and enjoyment with a view of the Atlantic Ocean, a unique wine list to add new colors to the dishes. Also, every evening we invite artists who sing live music. The bartender makes the most original cocktails, and we also have a DJ every weekend.</p>
          <div className='about-section-2-info-line'></div>
          <div className='about-section-2-info-bottom'>
            <div className='about-section-2-info-bottom-block'>
              <p className='about-section-2-info-bottom-block-title'>EMAIL</p>
              <a className='about-section-2-info-bottom-block-email' href="mailto:lamedusarestaurant@gmail.com">lamedusarestaurant@gmail.com</a>
            </div>
            <div className='about-section-2-info-bottom-block'>
              <p className='about-section-2-info-bottom-block-title'>STAY TUNED</p>
              <div className='about-section-2-info-bottom-socials'>
                <a href="https://www.facebook.com/restaurantlamedusa" className='icon-container icon-container--dark'>
                  <FaFacebook className='icon' />
                </a>
                <a href="https://www.instagram.com/la_medusa_tenerife/" className='icon-container icon-container--dark'>
                  <FaInstagram className='icon' />
                </a>
                <a href="https://www.tripadvisor.com/Restaurant_Review-g187479-d20257413-Reviews-Restaurant_La_Medusa_Cocktail_Bar-Tenerife_Canary_Islands.html" className='icon-container icon-container--dark'>
                  <FaTripadvisor className='icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-section-3'></div>
      <div className='about-section-4'></div>
      <div className='about-section-5'></div>
      <div className='about-section-6'></div>
    </div>
  )
}

export default About
