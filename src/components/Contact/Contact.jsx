import React, { useEffect, useRef, useState } from 'react';
import './Contact.scss';
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from '@emailjs/browser';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const form = useRef();
  const [formError, setFormError] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY);
      console.log(result.text);
      // Clear the form after successful submission
      form.current.reset();
      setFormError(null);
      // Show success message
      alert('Message sent successfully!');
    } catch (error) {
      console.error(error.text);
      setFormError('An error occurred while sending the message. Please try again.');
    }
  };


  const handleOnMapClick = () => {
    window.location.href = "https://www.google.com/maps?q=Avenida La Habana 9";
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='contact'>
      <div className='contact-section-1'>
        <div className='contact-section-1-content'>
          <p className='contact-section-1-title' data-aos="fade-up" data-aos-duration="1500">Contact</p>
        </div>
      </div>
      <div className='contact-section-2'>
        <div className='contact-section-2-top' data-aos="fade-down" data-aos-duration="1500">
          <p className='contact-section-2-paragraph'>RESERVE A TABLE</p>
          <h2 className='contact-section-2-heading'>Get In Touch</h2>
          <p className='contact-section-2-desc'>A great place to relax and enjoy unique seafood<br className='br-none' /> cuisine.</p>
          <button className='contact-section-2-button'>Call</button>
        </div>
        <form ref={form} className='contact-section-2-form' onSubmit={sendEmail} data-aos="fade-up">
          <input type="text" name="user_name" placeholder='Name' className='contact-section-2-input' required />
          <input type="email" name="user_email" placeholder='Email' className='contact-section-2-input' required />
          <input type="tel" name="user_phone" placeholder='Phone' className='contact-section-2-input' required />
          <textarea placeholder='Message' name="message" className='contact-section-2-input contact-section-2-textarea' required />
          {formError && <p className="error-message">{formError}</p>}
          <button type="submit" className='contact-section-2-form-button'>SEND</button>
        </form>
      </div>
      <div className='contact-section-3'>
        <div className='contact-section-3-block' data-aos="fade-up-down" data-aos-duration="1500">
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
              lamedusarestaurants@gmail.com
            </p>
          </div>
          <button type="button" className='contact-section-3-button' onClick={handleOnMapClick}>On Map</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
