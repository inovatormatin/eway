import React, { useState } from 'react'
import './ShopItems.css'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useSelector } from 'react-redux'
// BsList
import { Product, RingLoader } from '../../index'

const ShopItems = () => {
    const productState = useSelector(state => state.getallProducts);
    const { products } = productState;
    const [totalProduct, setTotalProduct] = useState(8)
    const loadmore = () => {
        setTotalProduct(totalProduct + 8)
    };
    return (
        <>
            {products !== null ?
                <>
                    <nav className='shopItemNav'>
                        <div className='rightNav'>
                            <span>All Products</span>
                            <span>Hot Products</span>
                            <span>Sales Products</span>
                        </div>
                        <div className='leftNav'>
                            <span>
                                {`Showing 1 - 
                                ${totalProduct > products.length ? 
                                products.length : 
                                totalProduct} of ${products.length} 
                                results`}
                            </span>
                            <span>Filter +</span>
                            <span>
                                <BsFillGrid3X3GapFill />
                                {/* <BsList /> */}
                            </span>
                        </div>
                    </nav>
                    <section className='itemgallery'>
                        {products.slice(0, totalProduct).map(((product, index) =>
                            <Product key={index} product={product} />
                        ))}
                    </section>
                </>
                : ''
            }
            {products === null ?
                <RingLoader /> :
                <div className='loadmore'>
                    <button onClick={() => loadmore()}>Load More</button>
                </div>
            }
        </>
    );
}

export default ShopItems;