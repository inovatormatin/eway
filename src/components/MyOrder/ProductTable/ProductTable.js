import React from 'react'
import "./ProductTable.css"
import { CgShoppingBag } from "react-icons/cg";

const ProductTable = () => {
    return (
        <div className='orderCard'>
            <h3><span><CgShoppingBag /> 1</span> Ordered on JAN 12, 2023</h3>
            <table className='myorderTable'>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td className='itemImageOrders'>
                            <img
                                src="https://res.cloudinary.com/inovatormatin/image/upload/v1653646903/eway/product/product13-1_zkcvcv.jpg"
                                alt="name"
                            />
                        </td>
                        <td>Bomb Cycle</td>
                        <td>x8</td>
                        <td>$ 90</td>
                        <td>$ 9780</td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td className='itemImageOrders'>
                            <img
                                src="https://res.cloudinary.com/inovatormatin/image/upload/v1653646903/eway/product/product13-1_zkcvcv.jpg"
                                alt="name"
                            />
                        </td>
                        <td>Bomb Cycle</td>
                        <td>x8</td>
                        <td>$ 90</td>
                        <td>$ 9780</td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td className='itemImageOrders'>
                            <img
                                src="https://res.cloudinary.com/inovatormatin/image/upload/v1653646903/eway/product/product13-1_zkcvcv.jpg"
                                alt="name"
                            />
                        </td>
                        <td>Bomb Cycle</td>
                        <td>x8</td>
                        <td>$ 90</td>
                        <td>$ 9780</td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td className='itemImageOrders'>
                            <img
                                src="https://res.cloudinary.com/inovatormatin/image/upload/v1653646903/eway/product/product13-1_zkcvcv.jpg"
                                alt="name"
                            />
                        </td>
                        <td>Bomb Cycle</td>
                        <td>x8</td>
                        <td>$ 90</td>
                        <td>$ 9780</td>
                    </tr>
                </tbody>
            </table>
            <h4><span><button>See Details</button><button className='danger'>Cancel Order</button></span> Total : $ 40404</h4>
        </div>
    )
}

export default ProductTable