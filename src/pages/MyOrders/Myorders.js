import React, { useEffect } from 'react'
import Cookies from "universal-cookie";
import { useSelector, useDispatch } from "react-redux";
import { ProductTable } from "../../components"
import "./Myorders.css"
import { getallOrders } from "../../actions/orderActions"

const Myorders = () => {
    const dispatch = useDispatch();
    const userOrders = useSelector((state) => state.userOrders);
    const cookies = new Cookies();
    let tkn = cookies.get("tkn");
    useEffect(() => {
        if (tkn !== undefined) {
            // dispatch(getallOrders());
        }
    }, []); // eslint-disable-line
    return (
        <div className='Myorderspage'>
            {/* {console.log("userOrders", userOrders) } */}
            <h1>My Orders</h1>
            <div>
                <ProductTable />
                <ProductTable />
            </div>
        </div>
    )
}

export default Myorders