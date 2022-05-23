import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerHead'>
        <h1>Sign up our Newsletter</h1>
        <p>Recieve 15% off for first three Order</p>
      </div>
      <label className='subscribeLetter' htmlFor="subscribe">
        <input name='subscribe' type="text" placeholder='Your email address'/>
        <button>Subscribe</button>
      </label>
      <section className='footerFoot'>
        <ul className='checkout'>
          <li>Blog</li>
          <li>Wishlist</li>
          <li>My Account</li>
        </ul>
        <span className='credits'>Designed by Manish for practice.</span>
        <ul className='socialHandels'>
          <li><FaFacebookF/></li>
          <li><FaTwitter/></li>
          <li><AiFillInstagram /></li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer;