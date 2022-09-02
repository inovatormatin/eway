import React, { useState } from "react";
import "./productpageDetail.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { cart } from "../../../actions/cartAction";
import { toast } from "react-toastify";

const ProductpageDetail = ({ name, description, price, tags, id }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userLogin);
  const cartState = useSelector((state) => state.cart);
  const cartedList = cartState.productList;
  const [product, setProduct] = useState({
    name: name,
    quanitity: 1,
    id: id,
  });
  let qnt = product.quanitity;
  const handleChange = (event) => {
    setProduct({ ...product, quanitity: parseInt(event.target.value) });
    qnt = event.target.value;
  };

  // on clicking add to cart
  const cartHandler = () => {
    // checking is user logged in or not
    userState.authtokken === null
      ? toast.warn("Please login to add Item !")
      : (
        cartedList.find(item => item.id === product.id) === undefined ?
          dispatch(cart("add", [...cartedList, product]))
        : toast.info("Item already added")
      );
  };
  return (
    <div className="productPageDetail">
      <h1>{name}</h1>
      {description.split("\n").map((par, index) => {
        return <p key={index}>{par}</p>;
      })}

      <div className="setQuantityAndPrice">
        <div className="setQuantity">
          {/* set qunatity */}
          <span>
            <button
              onClick={() =>
                product.quanitity > 1
                  ? setProduct({ ...product, quanitity: product.quanitity - 1 })
                  : ""
              }
            >
              -
            </button>
            <input
              type="number"
              onChange={(e) => handleChange(e)}
              value={qnt}
            />
            <button
              onClick={() =>
                setProduct({ ...product, quanitity: product.quanitity + 1 })
              }
            >
              +
            </button>
          </span>
          {/* add to cart button */}
          <span className="cartButton" onClick={() => cartHandler()}>
            ADD TO CART
          </span>
        </div>
        {/* price */}
        <p className="productPagePrice">
          <label>PRICE </label>
          <span>{`$ ${price}.`}</span>
        </p>
      </div>

      <p>
        <label>Tags: </label>
        {tags.map((tag, index) => {
          return <span className="tag" key={index}>{`${tag}`}</span>;
        })}
      </p>
    </div>
  );
};

export default ProductpageDetail;
