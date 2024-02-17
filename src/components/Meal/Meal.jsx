import React, { useEffect } from 'react'
import './Meal.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Meal = ({ img, title, desc, price, dataAos, dataAosDuration }) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='meal' data-aos={dataAos} data-aos-duration={dataAosDuration}>
      <div className='meal-top'>
        <img src={img} alt="meal" className='meal-img' />
        <div className='meal-desc'>
          <h3 className='meal-title'>
            {title}
          </h3>
          <p className='meal-price meal-price-mobile'>
            {price} €
          </p>
          <p className='meal-paragraph'>
            {desc}
          </p>
        </div>
      </div>
      <p className='meal-price meal-price-desktop'>
        {price} €
      </p>
    </div>
  )
}

export default Meal
