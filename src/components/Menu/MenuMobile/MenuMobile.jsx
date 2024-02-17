import React from 'react'
import './MenuMobile.scss'

import menu1 from '../../../assets/img/menu1.jpeg'
import menu2 from '../../../assets/img/menu2.jpeg'
import menu3 from '../../../assets/img/menu3.jpeg'
import menu4 from '../../../assets/img/menu4.jpeg'
import menu5 from '../../../assets/img/menu5.jpeg'
import Meal from '../../Meal/Meal'

import img from '../../../assets/img/about-section-2.jpeg'

import pdfMenu from '../../../assets/file/menu.pdf'
import pdfDrinks from '../../../assets/file/drinks.pdf'
import pdfBar from '../../../assets/file/bar.pdf'
import pdfWine from '../../../assets/file/wine.pdf'

const MenuMobile = () => {
  const openPdfMenu = () => {
    window.open(pdfMenu, '_blank');
  };
  const openPdfDrinks = () => {
    window.open(pdfDrinks, '_blank');
  };
  const openPdfBar = () => {
    window.open(pdfBar, '_blank');
  };
  const openPdfWine = () => {
    window.open(pdfWine, '_blank');
  };

  return (
    <div className='menu-mobile'>
      <div className='menu-mobile-section-1'>
        <div className='menu-mobile-section-1-img'></div>
        <div className='menu-mobile-section-1-block'>
          <Meal
            img={menu1}
            dataAos="zoom-out-right"
            dataAosDuration="500"
            title='Rib eye prime beef'
            desc='Served with potatoes & vegetables'
            price='41'
          />
          <Meal
            dataAos="zoom-out-right"
            dataAosDuration="600"
            img={menu2}
            title='Grilled sea bass'
            desc='With herbs and tomato salsa'
            price='21'
          />
          <Meal
            dataAos="zoom-out-right"
            dataAosDuration="700"
            img={menu3}
            title='Giant shrimp'
            desc='With veggies and mango in sweet and sour sauce'
            price='39'
          />
          <Meal
            dataAos="zoom-out-right"
            dataAosDuration="800"
            img={menu4}
            title='Grilled octopus'
            desc='With romesco sauce, potatoes & mango'
            price='21'
          />
          <Meal
            dataAos="zoom-out-right"
            dataAosDuration="900"
            img={menu5}
            title='Assorted soft tacos'
            desc='With grilled chicken and glazed ribs'
            price='27'
          />
        </div>
      </div>
      <div className='menu-mobile-section-2'>
        <button className='menu-mobile-section-2-button' onClick={openPdfMenu} data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="500">Download menu</button>
        <button className='menu-mobile-section-2-button' onClick={openPdfDrinks} data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500">Drinks</button>
        <button className='menu-mobile-section-2-button' onClick={openPdfBar} data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="500">Bar</button>
        <button className='menu-mobile-section-2-button' onClick={openPdfWine} data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500">Wine</button>
      </div>
    </div>
  )
}

export default MenuMobile
