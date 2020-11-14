import { PRODUCT_ADD } from "../types/types";

export const addProduct = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_ADD, payload: newProduct.data });
};
