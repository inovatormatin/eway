import React from 'react'
import './ShopItems.css'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useSelector } from 'react-redux'
// BsList
import { Product, RingLoader } from '../../index'

const ShopItems = () => {
    const productState = useSelector(state => state.getallProducts);
    const { products } = productState;
    return (
        <>
            <nav className='shopItemNav'>
                <div className='rightNav'>
                    <span>All Products</span>
                    <span>Hot Products</span>
                    <span>Sales Products</span>
                </div>
                <div className='leftNav'>
                    <span>Showing 1-18 0f 28 results</span>
                    <span>Filter +</span>
                    <span>
                        <BsFillGrid3X3GapFill />
                        {/* <BsList /> */}
                    </span>
                </div>
            </nav>
            <section className='itemgallery'>
                {products !== null ?
                    products.map(((product, index) =>
                        <Product
                            key={index}
                            img1={product.img1}
                            img2={product.img2}
                            name={product.name}
                            price={`$ ${product.price}`}
                        />
                    ))
                    : ''
                }
            </section>
            {products === null ? <RingLoader /> : ''}
        </>
    );
}

export default ShopItems;