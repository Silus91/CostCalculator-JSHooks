import React, { useReducer, createContext } from "react";
import { productReducer } from "../reducers/productReducer";
import products from "./products";

const INITIAL_STATE = products;
export const ProductContext = createContext();

const ProductContexProvider = (props) => {
  const [productsList, dispatch] = useReducer(productReducer, INITIAL_STATE);

  return (
    <ProductContext.Provider value={{ productsList, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContexProvider;
