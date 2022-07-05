import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import "./Productpage.css"
const Productpage = () => {
  // getting data
  const location = useLocation();
  const { name, img1, img2, description, price, tags } = location.state.product;

  const [productImage, setProductImage] = useState(img1);
  const imageHandler = (img) => {
    setProductImage(img);
  }
  return (
    <div className='productPage'>
      <section className='sec1'>

        {/* image component */}
        <div className='imageSection'>
          <div className='selectImage'>
            <img
              className={productImage === img1 ? 'activeImage' : ''}
              src={img1} alt="firstImage"
              onClick={() => imageHandler(img1)} />
            <img
              className={productImage === img2 ? 'activeImage' : ''}
              src={img2} alt="firstImage"
              onClick={() => imageHandler(img2)} />
          </div>
          {/* magnify component */}
          <div style={{ width: '400px' }}>
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: productImage,
              },
              largeImage: {
                src: productImage,
                width: 1550,
                height: 1800
              }
            }} />
          </div>
        </div>

        {/* product details */}
        <div className='productPageDetail'>
          <h1>{name}</h1>
          {description.split('\n').map((par, index) => {
            return (
              <p key={index}>
                {par}
              </p>
            )
          })}

          <div className='setQuantityAndPrice'>
            <div className='setQuantity'>
              {/* set qunatity */}
              <span>
                <button>-</button>
                <input type="text" defaultValue='1' />
                <button>+</button>
              </span>
              {/* add to cart button */}
              <span className='cartButton'>
                ADD TO CART
              </span>
            </div>
            {/* price */}
            <p className='productPagePrice'>
              <label>PRICE </label>
              <span>{`$ ${price}.`}</span>
            </p>
          </div>

          <p>
            <label>Tags: </label>
            {tags.map((tag, index) => {
              return (
                <span className='tag' key={index}>{`${tag}`}</span>
              )
            })}
          </p>
        </div>

      </section>
    </div>
  )
}

export default Productpage;