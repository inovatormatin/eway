import React from "react";
import { useSelector } from "react-redux";
import "./MyCart.css";
import { RingLoader } from "../../components/MyUtils/Loaders";
import Cookies from "universal-cookie";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MyCart = () => {
  const cookies = new Cookies();
  let tkn = cookies.get("tkn");
  const userState = useSelector((state) => state.userLogin);
  const userCart = useSelector((state) => state.cart);
  return (
    <div className="mycart">
      {userState.authtokken === null && tkn === undefined ? (
        <div className="notLoggedin">
          <AiOutlineShoppingCart />
          <p>Please login to see your item's.</p>
        </div>
      ) : userCart.fetching === true ? (
        <RingLoader />
      ) : (
        <div>
          <nav>
            <h1>Your Shopping Cart</h1>
            {/* {true ? (
              <button style={{ backgroundColor: "var(--lightGreen2)" }}>
                Place Order
              </button>
            ) : (
              <button style={{ backgroundColor: "blue" }}>Update Cart</button>
            )} */}
          </nav>
          <section>
            {userCart.cart.length > 0 ? (
              userCart.cart.map((item) => {
                return (
                  <div key={item.id} className="cartItem">
                    <img src={item.primaryImg} alt={item.name} />
                    <div>
                      <div className="cartItemAbout">
                        <h4>{item.name}</h4>
                        <p>Product Id _{item.id.slice(0, 7)}</p>
                      </div>
                      <span className="cartItemAmount">
                        <button>-</button>
                        <input type="number" defaultValue={item.quanitity} />
                        <button>+</button>
                      </span>
                    </div>
                    <h2>Total : $ {item.productPrice * item.quanitity} <br /><span>( per unit $ {item.productPrice} )</span></h2>
                  </div>
                );
              })
            ) : (
              <div className="notLoggedin">
                <AiOutlineShoppingCart />
                <p>You haven't added any item in your cart.</p>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default MyCart;
