import React from 'react'
import './Button.scss'
const Button = ({ text }) => {
  return (
    <div>
      <a className='button' href="tel:+34603839509">{text}</a>
    </div>
  )
}

export default Button
