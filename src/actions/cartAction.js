import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DEACREASE_QUANTITY,
} from "./index";
import { toast } from 'react-toastify';
 
export const cart = (action) => async (dispatch) => {
  if (action === "add") {
    dispatch({
      type: ADD_TO_CART,
      payload: [
        {
          name: "manish",
          quanitity: 2,
        },
      ],
    });
    toast.success(`Product Added`)
  } else{
    console.log("Please enter a valid action")
  }
};
