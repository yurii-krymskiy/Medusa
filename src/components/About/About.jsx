import React, { useEffect } from 'react'
import './About.scss'
import '../Header/Header.scss'
import img1 from '../../assets/img/about-section-2.jpeg'
import img2 from '../../assets/icon/phone-icon.png'
import card1 from '../../assets/img/card-1.jpeg'
import card2 from '../../assets/img/card-2.jpeg'
import card3 from '../../assets/img/card-3.jpeg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import Card from '../Card/Card'
import icon1 from '../../assets/icon/icon-1.png'
import icon2 from '../../assets/icon/icon-2.png'
import icon3 from '../../assets/icon/icon-3.png'
import block1 from '../../assets/img/about-section-7-1.jpeg'
import block2 from '../../assets/img/about-section-7-2.jpeg'
import block3 from '../../assets/img/about-section-7-3.jpeg'

import pdfMenu from '../../assets/file/menu.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const handleButtonClick = () => {
    window.location.href = "tel:+34603839509";
  };
  const openPdfMenu = () => {
    window.open(pdfMenu, '_blank');
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='about'>
      <div className='about-section-1'>
        <div className='about-section-1-title-container'>
          <h1 className='about-section-1-title' data-aos="fade-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine" data-aos-duration="1000">Feel the taste<br /> of Tenerife</h1>
        </div>
        <div className='about-section-1-block'></div>
      </div>
      <div className='about-section-2' data-aos="fade-up">
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
              <a className='about-section-2-info-bottom-block-email' href="mailto:lamedusarestaurants@gmail.com">lamedusarestaurants@gmail.com</a>
            </div>
            <div className='about-section-2-info-bottom-block'>
              <p className='about-section-2-info-bottom-block-title'>STAY TUNED</p>
              <div className='about-section-2-info-bottom-socials'>
                <a href="https://www.facebook.com/restaurantlamedusa" className='icon-container icon-container--dark'>
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/la_medusa_tenerife/" className='icon-container icon-container--dark'>
                  <FaInstagram />
                </a>
                <a href="https://www.tripadvisor.com/Restaurant_Review-g187479-d20257413-Reviews-Restaurant_La_Medusa_Cocktail_Bar-Tenerife_Canary_Islands.html" className='icon-container icon-container--dark'>
                  <FaTripadvisor />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-section-3' data-aos="fade-down">
        <div className='about-section-3-content'>
          <p className='about-section-3-title'>Reserve</p>
          <div>
            <img src={img2} alt="phone" className='about-section-3-icon' onClick={handleButtonClick} />
          </div>
          <div className='about-section-3-info'>
            <p className='about-section-3-info-call'>Call</p>
            <p className='about-section-3-info-call'>+34 603 83 95 09</p>
          </div>
        </div>
      </div>
      <div className='about-section-4' data-aos="fade-up" >
        <div className='about-section-4-content'>
          <p className='about-section-4-paragraph-1'>FACILITIES & MORE</p>
          <h2 className='about-section-4-title'>Services</h2>
          <p className='about-section-4-paragraph-2'>
            We care about each of our guests. Quality service is our main mission.<br />
            We have our own wine list and live music every night.
          </p>
          <div>
            <div className='about-section-4-btn-container'>
              <button className='about-section-4-button about-section-4-button--green' onClick={handleButtonClick}>REQUEST NOW</button>
              <button className='about-section-4-button about-section-4-button-white' onClick={handleButtonClick}>CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
      <div className='about-section-5'>
        <div className='about-section-5-content'>
          <div className='about-section-5-top'>
            <Card
              img={card1}
              title="GRILLED KING SHRIMPS"
              price="21"
              option1="With veggies and mango"
              option2="In sweet and sour sause"
              btn="View Menu"
              color="green"
              onClick={openPdfMenu}
            />
            <Card
              img={card2}
              title="SEAFOOD AND PESTO"
              price="14"
              option1="Creamy pesto"
              option2="Mixed seafood"
              btn="Book now"
              color="white"
              text="white"
              back="green"
              onClick={handleButtonClick}
            />
            <Card
              img={card3}
              title="FRITTO-MISTO"
              price="14"
              option1="Seafood deep fried"
              option2="Tartare sauce"
              btn="Reservation"
              color="green"
              onClick={handleButtonClick}
            />
          </div>
          <div className='about-section-5-bottom'>
            <div className='about-section-5-bottom-container'>
              <div className='about-section-5-block' data-aos="zoom-in-up">
                <p className='about-section-5-num'>01</p>
                <div className='about-section-5-line'></div>
                <p className='about-section-5-title'>MUSIC</p>
                <p className='about-section-5-paragraph'>Our restaurant has live music 7 days a week with different artists</p>
              </div>
              <div className='about-section-5-block' data-aos="zoom-in-down">
                <p className='about-section-5-num'>02</p>
                <div className='about-section-5-line'></div>
                <p className='about-section-5-title'>BAR</p>
                <p className='about-section-5-paragraph'>Our bartenders make the best cocktails in all of Tenerife</p>
              </div>
            </div>
            <div className='about-section-5-bottom-container' data-aos="zoom-in-up">
              <div className='about-section-5-block'>
                <p className='about-section-5-num'>03</p>
                <div className='about-section-5-line'></div>
                <p className='about-section-5-title'>Menu</p>
                <p className='about-section-5-paragraph'>Our menu has a choice of any dishes, not only seafood but also good meat</p>
              </div>
              <div className='about-section-5-block' data-aos="zoom-in-down">
                <p className='about-section-5-num'>04</p>
                <div className='about-section-5-line'></div>
                <p className='about-section-5-title'>LOCATION</p>
                <p className='about-section-5-paragraph'>We are located on the very shore of the Ocean with a beautiful view</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='about-section-6'>
        <div className='about-section-6-content'>
          <p className='about-section-6-title' data-aos="fade-down">LA MEDUSA</p>
          <p className='about-section-6-meal' data-aos="fade-down">Steak New York</p>
          <p className='about-section-6-price' data-aos="fade-down">26 €</p>
          <div className='about-section-6-second-content'>
            <div className='about-section-6-icon-block'>
              <img src={icon1} alt="icon" className='about-section-6-icon' />
              <p className='about-section-6-icon-title'>Dinner</p>
            </div>
            <div className='about-section-6-icon-block about-section-6-icon-block--second'>
              <img src={icon2} alt="icon" className='about-section-6-icon' />
              <p className='about-section-6-icon-title'>Breakfast</p>
            </div>
            <div className='about-section-6-icon-block'>
              <img src={icon3} alt="icon" className='about-section-6-icon' />
              <p className='about-section-6-icon-title'>Lunch</p>
            </div>
          </div>
        </div>
      </div>
      <div className='about-section-7'>
        <div className='about-section-7-content'>
          <h2 className='about-section-7-main-title'>We Offer</h2>
          <div className='about-section-7-container'>
            <div className='about-section-7-block' data-aos="fade-up">
              <img src={block1} alt="img" className='about-section-7-img' />
              <h3 className='about-section-7-title'>Cocktails</h3>
              <p className='about-section-7-desc'>Exquisite cocktails from the best<br className='br-none' /> bartenders</p>
            </div>
            <div className='about-section-7-block' data-aos="flip-down">
              <img src={block2} alt="img" className='about-section-7-img about-section-7-img--big' />
              <h3 className='about-section-7-title'>Food</h3>
              <p className='about-section-7-desc'>Delicious food and a beautiful view of the<br className='br-none' /> ocean</p>
            </div>
            <div className='about-section-7-block' data-aos="fade-up">
              <img src={block3} alt="img" className='about-section-7-img' />
              <h3 className='about-section-7-title'>Music</h3>
              <p className='about-section-7-desc'>Live music every day with different<br className='br-none' /> artists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
