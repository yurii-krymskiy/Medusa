import React from 'react'
import './Menu.scss'

import menu1 from '../../assets/img/menu1.jpeg'
import menu2 from '../../assets/img/menu2.jpeg'
import menu3 from '../../assets/img/menu3.jpeg'
import menu4 from '../../assets/img/menu4.jpeg'
import menu5 from '../../assets/img/menu5.jpeg'
import Meal from '../Meal/Meal'

import pdfMenu from '../../assets/file/menu.pdf'
import pdfDrinks from '../../assets/file/drinks.pdf'
import pdfBar from '../../assets/file/bar.pdf'
import pdfWine from '../../assets/file/wine.pdf'
import MenuMobile from './MenuMobile/MenuMobile'

const Menu = () => {
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
    <>
      <div className='menu-desktop'>
        <div className='menu-section-1'>
          <div className='menu-section-1-content'>
            <div className='menu-section-1-block'>
              <Meal
                img={menu1}
                title='Rib eye prime beef'
                desc='Served with potatoes & vegetables'
                price='41'
              />
              <Meal
                img={menu2}
                title='Grilled sea bass'
                desc='With herbs and tomato salsa'
                price='21'
              />
              <Meal
                img={menu3}
                title='Giant shrimp'
                desc='With veggies and mango in sweet and sour sauce'
                price='39'
              />
              <Meal
                img={menu4}
                title='Grilled octopus'
                desc='With romesco sauce, potatoes & mango'
                price='21'
              />
              <Meal
                img={menu5}
                title='Assorted soft tacos'
                desc='With grilled chicken and glazed ribs'
                price='27'
              />
            </div>
          </div>
        </div>
        <div className='menu-section-2'>
          <button className='menu-section-2-button' onClick={openPdfMenu}>Download menu</button>
          <button className='menu-section-2-button' onClick={openPdfDrinks}>Drinks</button>
          <button className='menu-section-2-button' onClick={openPdfBar}>Bar</button>
          <button className='menu-section-2-button' onClick={openPdfWine}>Wine</button>
        </div>
      </div>

      <MenuMobile />
    </>
  )
}

export default Menu
