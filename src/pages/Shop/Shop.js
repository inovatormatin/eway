import React from 'react'
import './Shop.css'
import ShopItems from '../../components/Shop/ShopItems/ShopItems'

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h2>Shop</h2>
        <p><span>Home </span>&gt; Product</p>
      </div>
      <ShopItems />
    </div>
  )
}

export default Shop;