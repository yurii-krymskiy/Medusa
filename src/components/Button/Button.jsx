import React from 'react'
import './Button.scss'
const Button = ({ text }) => {
  const handleButtonClick = () => {
    window.location.href = "tel:+34603839509";
  };
  return (
    <div>
      <button className='button' onClick={handleButtonClick}>{text}</button>
    </div>
  )
}

export default Button
