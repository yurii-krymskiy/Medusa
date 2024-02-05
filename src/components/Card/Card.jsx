import React from 'react'
import './Card.scss'
import { IoMdCheckmark } from "react-icons/io";

const Card = ({ img, title, price, option1, option2, btn, color, back, text, onClick }) => {
  return (
    <div className='card'>
      <div className={`card-content card-content--${back} card-content--${text}`}>
        <div className='card-img-container'>
          <img src={img} alt="img" className='card-img' />
        </div>
        <div className='card-bottom'>
          <h3 className='card-title'>{title}</h3>
          <p className={`card-price card-price--${text}`}>{price} €</p>
          <div className='card-option'>
            <IoMdCheckmark width={14} /><p>{option1}</p>
          </div>
          <div className='card-option'>
            <IoMdCheckmark width={14} /><p>{option2}</p>
          </div>
          <button onClick={onClick} className={`card-button card-button--${color}`}>{btn}</button>
        </div>
      </div>
    </div>
  )
}

export default Card
