import React from 'react'
import './About.css'
import a1 from '../../img/other/about1.jpg'
import a2 from '../../img/other/about2.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className='aboutTitle'>
        <h2>About</h2>
      </div>
      <div className='aboutContent'>
        <section className='acrs'>
          <h3>Company Overview</h3>
          <p>
            The Company first online retailer to globally distribute a wide 
            range of fashion, beauty and lifestyle products from Asia through 
            their website example.com. Every season brings customers the 
            latest trends along with thousands of items from brands across Asia. 
            example.com now represents the best platform for brands in Asia 
            to connect with customers worldwide.
          </p>

          <h3>Company Mission</h3>
          <p>
            The company brings the latest fashion trends to customers worldwide. 
            Launched in July 2020, the example.com website leverages the success 
            of a proven e-commerce platform and technology to deliver customers 
            an exciting and unique destination for fashion, beauty, and lifestyle 
            products.
          </p>

          <h3>Company Vision</h3>
          <p>
            To provide customers with an exciting shopping experience, superior 
            service, and a fine selection of affordable, high-quality fashion, 
            beauty, and lifestyle products.
          </p>

          <h3>Company Intro</h3>
          <p>
            To provide customers with an exciting shopping experience, superior 
            service, and a fine selection of affordable, high-quality fashion, 
            beauty, and lifestyle products.
          </p>
          <img src={a2} alt="about2img" />
        </section>
        <section className='acls'>
          <img src={a1} alt="about1img" />
          <h3>Company Profile</h3>
          <p>
            The Company first online retailer to globally distribute a wide 
            range of fashion, beauty and lifestyle products from Asia through 
            their website example.com. Every season brings customers the 
            latest trends along with thousands of items from brands across Asia. 
            example.com now represents the best platform for brands in Asia 
            to connect with customers worldwide.
          </p>

          <h3>Mission 2030</h3>
          <p>
            The company brings the latest fashion trends to customers worldwide. 
            Launched in July 2030, the example.com website leverages the success 
            of a proven e-commerce platform and technology to deliver customers 
            an exciting and unique destination for fashion, beauty, and lifestyle 
            products.
          </p>
          <p>
            offers express shipping on all orders. Shipments arrive within approximately 
            3 working days from date of dispatch. Our ecommerce Phasellus luctus id 
            turpis cursus. Donec at augue dictum dolor In tempor ultrices est,
          </p>
        </section>
      </div>
      <div className='needToKnow'>
        <h1>Need to Know anything contact us</h1>
        <button>Contact us</button>
      </div>
    </div>
  )
}

export default About;