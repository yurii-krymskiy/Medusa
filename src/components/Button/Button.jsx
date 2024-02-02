import React from 'react'
import './Button.scss'
const Button = () => {
  const handleButtonClick = () => {
    window.location.href = "tel:+34603839509";
  };
  return (
    <div>
      <button className='button' onClick={handleButtonClick}>BOOK NOW</button>
    </div>
  )
}

export default Button
