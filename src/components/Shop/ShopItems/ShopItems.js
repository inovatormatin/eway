import React from 'react'
import './ShopItems.css'
import Product from '../../HomeComp/Product/Product'
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
import product9a from '../../../img/product/product9-1.jpg'
import product9b from '../../../img/product/product9-2.jpg'
import product10a from '../../../img/product/product10-1.jpg'
import product10b from '../../../img/product/product10-2.jpg'
import product11a from '../../../img/product/product11-1.jpg'
import product11b from '../../../img/product/product11-2.jpg'
import product12a from '../../../img/product/product12-1.jpg'
import product12b from '../../../img/product/product12-2.jpg'
import product13a from '../../../img/product/product13-1.jpg'
import product13b from '../../../img/product/product13-2.jpg'
import product14a from '../../../img/product/product14-1.jpg'
import product14b from '../../../img/product/product14-2.jpg'
import product15a from '../../../img/product/product15-1.jpg'
import product15b from '../../../img/product/product15-2.jpg'
import product16a from '../../../img/product/product16-1.jpg'
import product16b from '../../../img/product/product16-2.jpg'
import product17a from '../../../img/product/product17-1.jpg'
import product17b from '../../../img/product/product17-2.jpg'
import product18a from '../../../img/product/product18-1.jpg'
import product18b from '../../../img/product/product18-2.jpg'
import product19a from '../../../img/product/product19-1.jpg'
import product19b from '../../../img/product/product19-2.jpg'
import product20a from '../../../img/product/product20-1.jpg'
import product20b from '../../../img/product/product20-2.jpg'
import product21a from '../../../img/product/product21-1.jpg'
import product21b from '../../../img/product/product21-2.jpg'
import product22a from '../../../img/product/product22-1.jpg'
import product22b from '../../../img/product/product22-2.jpg'
import product23a from '../../../img/product/product23-1.jpg'
import product23b from '../../../img/product/product23-2.jpg'
import product24a from '../../../img/product/product24-1.jpg'
import product24b from '../../../img/product/product24-2.jpg'
import product25a from '../../../img/product/product25-1.jpg'
import product25b from '../../../img/product/product25-2.jpg'
import product26a from '../../../img/product/product26-1.jpg'
import product26b from '../../../img/product/product26-2.jpg'
import product27a from '../../../img/product/product27-1.jpg'
import product27b from '../../../img/product/product27-2.jpg'
import product28a from '../../../img/product/product28-1.jpg'
import product28b from '../../../img/product/product28-2.jpg'
import product29a from '../../../img/product/product29-1.jpg'
import product29b from '../../../img/product/product29-2.jpg'
import product30a from '../../../img/product/product30-1.jpg'
import product30b from '../../../img/product/product30-2.jpg'
import product31a from '../../../img/product/product31-1.jpg'
import product31b from '../../../img/product/product31-2.jpg'
import product32a from '../../../img/product/product32-1.jpg'
import product32b from '../../../img/product/product32-2.jpg'
import product33a from '../../../img/product/product33-1.jpg'
import product33b from '../../../img/product/product33-2.jpg'
import product34a from '../../../img/product/product34-1.jpg'
import product34b from '../../../img/product/product34-2.jpg'

const ShopItems = () => {
    const items = [
        { img1: product1a, img2: product1b, itemsName: 'Hot Base Tee', itemsPrice: '$ 17.00' },
        { img1: product2a, img2: product2b, itemsName: 'Cardigan Sweater', itemsPrice: '$ 12.00' },
        { img1: product3a, img2: product3b, itemsName: 'Retro Stripe Slim', itemsPrice: '$ 15.00' },
        { img1: product4a, img2: product4b, itemsName: 'Stripped Ribbed', itemsPrice: '$ 30.00' },

        { img1: product5a, img2: product5b, itemsName: 'Black Skinny Jeans', itemsPrice: '$ 30.00' },
        { img1: product6a, img2: product6b, itemsName: 'Tighten Bag', itemsPrice: '$ 371.00' },
        { img1: product7a, img2: product7b, itemsName: 'Knot It Tee', itemsPrice: '$ 33.00' },
        { img1: product8a, img2: product8b, itemsName: 'Shirt in Camel', itemsPrice: '$ 30.00' },

        { img1: product9a, img2: product9b, itemsName: 'Long with Stripes', itemsPrice: '$ 17.00' },
        { img1: product10a, img2: product10b, itemsName: 'Cut Out Bootie', itemsPrice: '$ 40.56' },
        { img1: product4a, img2: product4b, itemsName: 'Stripped Ribbed', itemsPrice: '$ 30.00' },
        { img1: product11a, img2: product11b, itemsName: 'Leather Jackets', itemsPrice: '$ 80.00' },

        { img1: product12a, img2: product12b, itemsName: 'Lace-Up Top', itemsPrice: '$ 25.00 - $ 33.00' },
        { img1: product13a, img2: product13b, itemsName: 'Bomb Cycle', itemsPrice: '$ 45.00' },
        { img1: product14a, img2: product14b, itemsName: 'Neck Cami Sunglass', itemsPrice: '$ 20.00' },
        { img1: product15a, img2: product15b, itemsName: 'Pcvronica Backpack', itemsPrice: '$ 56.00' },

        { img1: product16a, img2: product16b, itemsName: 'Day Flower Pack', itemsPrice: '$ 146.00' },
        { img1: product17a, img2: product17b, itemsName: 'Boyfriend Jeans', itemsPrice: '$ 60.00' },
        { img1: product18a, img2: product18b, itemsName: 'Light Wash Classic', itemsPrice: '$ 33.00' },
        { img1: product19a, img2: product19b, itemsName: 'Juvenate', itemsPrice: '$ 137.00' },

        { img1: product20a, img2: product20b, itemsName: 'Crossover Ribbed Top', itemsPrice: '$ 30.00' },
        { img1: product21a, img2: product21b, itemsName: 'Lace-Up V Tee', itemsPrice: '$ 37.00' },
        { img1: product22a, img2: product22b, itemsName: 'Awesome Necklace', itemsPrice: '$ 15.00' },
        { img1: product23a, img2: product23b, itemsName: 'Track Jacket', itemsPrice: '$ 51.00' },

        { img1: product24a, img2: product24b, itemsName: 'Crossover Ribbed Top', itemsPrice: '$ 30.00' },
        { img1: product25a, img2: product25b, itemsName: 'Thaver Skinny', itemsPrice: '$ 50.00' },
        { img1: product26a, img2: product26b, itemsName: 'Textured Marl', itemsPrice: '$ 15.00' },
        { img1: product27a, img2: product27b, itemsName: 'Stanton Trainer', itemsPrice: '$ 203.00' },

        { img1: product28a, img2: product28b, itemsName: 'Tassel Ballerina', itemsPrice: '$ 30.00' },
        { img1: product29a, img2: product29b, itemsName: 'Soul Graphic Tee', itemsPrice: '$ 15.00' },
        { img1: product30a, img2: product30b, itemsName: 'Sleeveless Hooded', itemsPrice: '$ 30.00' },
        { img1: product31a, img2: product31b, itemsName: 'Shoulder Top', itemsPrice: '$ 15.00' },

        { img1: product20a, img2: product20b, itemsName: 'Crossover Ribbed Top', itemsPrice: '$ 30.00' },
        { img1: product32a, img2: product32b, itemsName: 'Recruit Small Saddle', itemsPrice: '$ 65.00' },
        { img1: product33a, img2: product33b, itemsName: 'Printed Bag', itemsPrice: '$ 72.00' },
        { img1: product34a, img2: product34b, itemsName: 'Pointy Stileto Boot', itemsPrice: '$ 203.00' },
    ];
    return(
        <>
        <span></span>
        <section className='itemgallery'>
            {items.map((items => 
                <Product 
                img1={items.img1} 
                img2={items.img2} 
                name={items.itemsName} 
                price={items.itemsPrice}
                />
            ))}
        </section>
        </>
    );
}

export default ShopItems;