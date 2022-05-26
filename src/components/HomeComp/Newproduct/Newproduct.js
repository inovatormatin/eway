import React from 'react'
import './Newproduct.css'
import Product from '../Product/Product'
import product1a from '../../../img/product/product1-1.jpg'
import product1b from '../../../img/product/product1-2.jpg'
import product2a from '../../../img/product/product3-1.jpg'
import product2b from '../../../img/product/product3-2.jpg'
import product3a from '../../../img/product/product9-1.jpg'
import product3b from '../../../img/product/product9-2.jpg'
import product4a from '../../../img/product/product10-1.jpg'
import product4b from '../../../img/product/product10-2.jpg'

const Newproduct = () => {
  const product = [
    { img1: product1a, img2: product1b, productName: 'Hot Base Tee', productPrice: '$ 17.00' },
    { img1: product2a, img2: product2b, productName: 'Cardigan Sweater', productPrice: '$ 12.00' },
    { img1: product3a, img2: product3b, productName: 'Retro Stripe Slim', productPrice: '$ 15.00' },
    { img1: product4a, img2: product4b, productName: 'Stripped Ribbed', productPrice: '$ 30.00' }
  ];
  return (
    <div className='newproduct'>
        <section className='npHeading'>
            <span>Our Store</span>
            <h3>New PRODUCTS</h3>
            <p>Browse our New collection according the category top interesting products.</p>
        </section>
        <section className='npgallery'>
            {product.map(((product, index) => 
                <Product 
                    key={index}
                    img1={product.img1} 
                    img2={product.img2} 
                    name={product.productName} 
                    price={product.productPrice}
                />
            ))}
        </section>
    </div>
  )
}

export default Newproduct;