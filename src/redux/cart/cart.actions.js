import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.CART_TOGGLE_HIDDEN,
});

export const addItems = (item) => ({
  type: cartActionTypes.ADD_ITEMS,
  payload: item,
});
