import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactTitle'>
        <h2>Contact</h2>
      </div>
      <div className='contactContain'>
        <form action="">
          <input type="text" placeholder='Your Name*'/>
          <input type="text" placeholder='Your email*'/>
          <input type="text" placeholder='Subject*'/>
          <textarea name="" id="" cols="30" rows="5" placeholder='Your message*' />
          <button type='submit'>Submit</button>
        </form>
        <iframe 
          title='title'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.3767466570656!2d-119.79190944149457!3d36.734400094707375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094609fa2bf2f13%3A0xca2c81043383dae1!2sFamily%20Fashions!5e0!3m2!1sen!2sin!4v1653573489461!5m2!1sen!2sin"   
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          className='map'
        />
      </div>
    </div>
  )
}

export default Contact;