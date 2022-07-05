import React from 'react'
import { useLocation } from 'react-router-dom';
import { Preview, ProductpageDetail } from '../../components';

import "./Productpage.css"
const Productpage = () => {
  // getting data
  const location = useLocation();
  const { name, img1, img2, description, price, tags } = location.state.product;

  return (
    <div className='productPage'>
      <section className='sec1'>
        <Preview img1={img1} img2={img2} />
        <ProductpageDetail
          name={name}
          description={description}
          price={price}
          tags={tags}
        />
      </section>
    </div>
  )
}

export default Productpage;