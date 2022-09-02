import React from "react";
import { useSelector } from "react-redux";
import "./MyCart.css"

const MyCart = () => {
  const userState = useSelector((state) => state.userLogin);
  return (
    <div className="mycart">
      {userState.authtokken !== null ? (
        <div>Please login to see your cart.</div>
      ) : (
        <div>
          <h1>Your Shopping Cart</h1>
          <section>
            <div className="cartItem">
              <img src="https://res.cloudinary.com/inovatormatin/image/upload/v1653646903/eway/product/product13-1_zkcvcv.jpg" alt="" />
              <div className="cartItemAbout">
                <h4>Bomb Cycle</h4>
                <p>Product Id _2b934</p>
              </div>
              <span className="cartItemAmount">
                <button>-</button>
                <input type="number" defaultValue={1}/>
                <button>+</button>
              </span>
              <h2>$ 43</h2>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default MyCart;
