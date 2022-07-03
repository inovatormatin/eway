import React from 'react'
import './Newproduct.css'
import { Product, RingLoader } from '../../index'
import { useSelector } from 'react-redux'

const Newproduct = () => {
  const productState = useSelector(state => state.getallProducts);
  const { products } = productState;
  return (
    <div className='newproduct'>
        <section className='npHeading'>
            <span>Our Store</span>
            <h3>New PRODUCTS</h3>
            <p>Browse our New collection according the category top interesting products.</p>
        </section>
        <section className='npgallery'>
            {products !== null ?
            products.slice(0, 4).map(((product, index) => 
                <Product 
                    key={index}
                    img1={product.img1} 
                    img2={product.img2} 
                    name={product.name} 
                    price={`$ ${product.price}`}
                />
            )) 
            : ''}
        </section>
        {products === null ? <RingLoader /> : ''}
    </div>
  )
}

export default Newproduct;