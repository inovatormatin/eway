import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DEACREASE_QUANTITY,
} from "./index";
import { toast } from 'react-toastify';


export const cart = (action, list) => async (dispatch) => {
  console.log(list);
  if (action === "add") {
    dispatch({
      type: ADD_TO_CART,
      payload: [...list],
    });
    toast.success(`Product Added`);
  } else{
    console.log("Please enter a valid action")
  }
};
