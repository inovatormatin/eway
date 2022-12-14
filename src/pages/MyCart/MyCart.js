import React from "react";
import { useSelector } from "react-redux";
import "./MyCart.css";
import { RingLoader } from "../../components/MyUtils/Loaders";
import Cookies from "universal-cookie";

const MyCart = () => {
  const cookies = new Cookies();
  let tkn = cookies.get("tkn");
  const userState = useSelector((state) => state.userLogin);
  const userCart = useSelector((state) => state.cart);
  return (
    <div className="mycart">
      {userState.authtokken === null && tkn === undefined ? (
        <div>Please login to see your cart.</div>
      ) : userCart.fetching === true ? (
        <RingLoader />
      ) : (
        <div>
          <h1>Your Shopping Cart</h1>
          <section>
            {userCart.cart.length > 0 ? (
              userCart.cart.map((item) => {
                return (
                  <div key={item.id} className="cartItem">
                    <img src={item.primaryImg} alt={item.name} />
                    <div className="cartItemAbout">
                      <h4>{item.name}</h4>
                      <p>Product Id _{item.id.slice(0, 7)}</p>
                    </div>
                    <span className="cartItemAmount">
                      <button>-</button>
                      <input type="number" defaultValue={item.quanitity} />
                      <button>+</button>
                    </span>
                    <h2>$ {item.productPrice}</h2>
                  </div>
                );
              })
            ) : (
              <p>You haven't added any item in your cart.</p>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default MyCart;
