import React, { useRef, useState } from 'react';
import './Contact.scss';
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  const handleOnMapClick = () => {
    window.location.href = "https://www.google.com/maps?q=Avenida La Habana 9";
  };

  return (
    <div className='contact'>
      <div className='contact-section-1'>
        <div className='contact-section-1-content'>
          <p className='contact-section-1-title'>Contact</p>
        </div>
      </div>
      <div className='contact-section-2'>
        <div className='contact-section-2-top'>
          <p className='contact-section-2-paragraph'>RESERVE A TABLE</p>
          <h2 className='contact-section-2-heading'>Get In Touch</h2>
          <p className='contact-section-2-desc'>A great place to relax and enjoy unique seafood<br className='br-none' /> cuisine.</p>
          <button className='contact-section-2-button'>Call</button>
        </div>
        <form ref={form} className='contact-section-2-form' onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder='Name' className='contact-section-2-input' />
          <input type="email" name="user_email" placeholder='Email' className='contact-section-2-input' />
          <input type="tel" name="user_phone" placeholder='Phone' className='contact-section-2-input' />
          <textarea placeholder='Message' name="message" className='contact-section-2-input contact-section-2-textarea' />
          <button type="submit" className='contact-section-2-form-button'>SEND</button>
        </form>
      </div>
      <div className='contact-section-3'>
        <div className='contact-section-3-block'>
          <p className='contact-section-3-title'>Info</p>
          <div className='contact-section-3-item'>
            <MdLocationOn className='icon' />
            <p className='contact-section-3-paragraph'>
              Avenida La Habana 9
            </p>
          </div>
          <div className='contact-section-3-item'>
            <FaPhoneAlt className='icon' />
            <p className='contact-section-3-paragraph'>
              Phone +34 603 83 95 09
            </p>
          </div>
          <div className='contact-section-3-item'>
            <IoMdMail className='icon' />
            <p className='contact-section-3-paragraph'>
              lamedusarestaurant@gmail.com
            </p>
          </div>
          <button type="button" className='contact-section-3-button' onClick={handleOnMapClick}>On Map</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
