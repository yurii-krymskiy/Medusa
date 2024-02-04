import React from 'react'
import './Meal.scss'


const Meal = ({ img, title, desc, price }) => {
  return (
    <div className='meal'>
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
