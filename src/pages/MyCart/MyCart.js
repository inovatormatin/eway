import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MyCart.css";
import { RingLoader } from "../../components/MyUtils/Loaders";
import Cookies from "universal-cookie";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { updateCart } from "../../actions/cartAction";
import { toast } from "react-toastify";
import { getCartbyUser } from "../../actions/cartAction";

const MyCart = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  let tkn = cookies.get("tkn");
  const [placeOrUpdate, setPlaceOrUpdate] = useState(true);
  const userState = useSelector((state) => state.userLogin);
  const userCart = useSelector((state) => state.cart);
  const [newCart, setNewCart] = useState([]);

  const updateQnt = (val, action, id) => {
    newCart.filter((item) => {
      if (item.id === id && action === "dec") {
        val !== 1
          ? (item.quanitity = val - 1)
          : toast.error(`Minimum Quantity 1 required.`);
      } else if (item.id === id && action === "inc") {
        item.quanitity = val + 1;
      }
      return null;
    });
    setNewCart([...newCart])
    if (JSON.stringify(userCart.cart) === JSON.stringify(newCart)) {
      setPlaceOrUpdate(true);
    } else {
      setPlaceOrUpdate(false);
    }
  };

  useEffect(() => {
    if (tkn !== undefined) {
      dispatch(getCartbyUser("getCartbyUser"));
    }
  }, []) // eslint-disable-line

  useEffect(() => {
    setNewCart(JSON.parse(JSON.stringify(userCart.cart)));
  }, [userCart.cart]) // eslint-disable-line

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
            {placeOrUpdate ? (
              <button style={{ backgroundColor: "var(--lightGreen2)" }}>
                Place Order
              </button>
            ) : (
              <button
                style={{ backgroundColor: "blue" }}
                onClick={() => {
                  dispatch(updateCart(userCart.cart));
                  setPlaceOrUpdate(true);
                }}
              >
                Update Cart
              </button>
            )}
          </nav>
          <section>
            {newCart.length > 0 ? (
              newCart.map((item) => {
                return (
                  <div key={item.id} className="cartItem">
                    <span className="removeButton"><MdDeleteOutline /></span>
                    <img src={item.primaryImg} alt={item.name} />
                    <div>
                      <div className="cartItemAbout">
                        <h4>{item.name}</h4>
                        <p>Product Id _{item.id.slice(0, 7)}</p>
                      </div>
                      <span className="cartItemAmount">
                        <button
                          onClick={() =>
                            updateQnt(item.quanitity, "dec", item.id)
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quanitity}
                          onChange={() => { }}
                        />
                        <button
                          onClick={() =>
                            updateQnt(item.quanitity, "inc", item.id)
                          }
                        >
                          +
                        </button>
                      </span>
                    </div>
                    <h2>
                      Total : $ {item.productPrice * item.quanitity} <br />
                      <span>per unit $ {item.productPrice}</span>
                    </h2>
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
