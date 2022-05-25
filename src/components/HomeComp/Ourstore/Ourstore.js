import React from 'react'
import './Ourstore.css'
import Product from '../Product/Product'
import product1a from '../../../img/product/product1-1.jpg'
import product1b from '../../../img/product/product1-2.jpg'
import product2a from '../../../img/product/product2-1.jpg'
import product2b from '../../../img/product/product2-2.jpg'
import product3a from '../../../img/product/product3-1.jpg'
import product3b from '../../../img/product/product3-2.jpg'
import product4a from '../../../img/product/product4-1.jpg'
import product4b from '../../../img/product/product4-2.jpg'
import product5a from '../../../img/product/product5-1.jpg'
import product5b from '../../../img/product/product5-2.jpg'
import product6a from '../../../img/product/product6-1.jpg'
import product6b from '../../../img/product/product6-2.jpg'
import product7a from '../../../img/product/product7-1.jpg'
import product7b from '../../../img/product/product7-2.jpg'
import product8a from '../../../img/product/product8-1.jpg'
import product8b from '../../../img/product/product8-2.jpg'

const Ourstore = () => {
  const product = [
    { img1: product1a, img2: product1b, productName: 'Hot Base Tee', productPrice: '$ 17.00' },
    { img1: product2a, img2: product2b, productName: 'Cardigan Sweater', productPrice: '$ 12.00' },
    { img1: product3a, img2: product3b, productName: 'Retro Stripe Slim', productPrice: '$ 15.00' },
    { img1: product4a, img2: product4b, productName: 'Stripped Ribbed', productPrice: '$ 30.00' },
    { img1: product5a, img2: product5b, productName: 'Black Skinny Jeans', productPrice: '$ 30.00' },
    { img1: product6a, img2: product6b, productName: 'Tighten Bag', productPrice: '$ 371.00' },
    { img1: product7a, img2: product7b, productName: 'Knot It Tee', productPrice: '$ 33.00' },
    { img1: product8a, img2: product8b, productName: 'Shirt in Camel', productPrice: '$ 30.00' }
  ];
  return (
    <div className='ourStore'>
        <section className='storeHeading'>
            <span>Our Store</span>
            <h3>TOP SELLING PRODUCTS</h3>
            <p>You’ll definitely find that you are looking for. Browse our collection according the category top interesting products.</p>
        </section>
        <section className='storegallery'>
            {product.map((product => 
                <Product 
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

export default Ourstore;