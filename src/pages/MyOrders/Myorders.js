import React, { useEffect } from 'react'
import Cookies from "universal-cookie";
import { useSelector, useDispatch } from "react-redux";
import { getallOrders } from "../../actions/orderActions"

const Myorders = () => {
    const dispatch = useDispatch();
    const userOrders = useSelector((state) => state.userOrders);
    const cookies = new Cookies();
    let tkn = cookies.get("tkn");
    useEffect(() => {
        if (tkn !== undefined) {
            dispatch(getallOrders());
        }
    }, []); // eslint-disable-line
    return (
        <div>
            {console.log("userOrders", userOrders) }
            Myorders
        </div>
    )
}

export default Myorders