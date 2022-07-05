import React from 'react'
import './productpageDetail.css'

const ProductpageDetail = ({name, description, price, tags}) => {
    return (
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
    )
}

export default ProductpageDetail