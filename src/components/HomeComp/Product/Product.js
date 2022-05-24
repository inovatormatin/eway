import React from 'react'
import './Product.css'

const Product = ({img1, img2, name, price}) => {
  return (
    <div className='productCard'>
        <div className='productImage'>
            <img id='hideOnHover' src={img1} alt="prdouct1a" />
            <img src={img2} alt="prdouct1b" />
        </div>
        <div className='productDetail'>
            <h5>{name}</h5>
            <p>{price}</p>
        </div>
    </div>
  )
}
export default Product;