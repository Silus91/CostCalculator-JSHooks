import React, { useReducer, createContext } from "react";
import { ingredientReducer } from "../reducers/ingredientReducer";
import products from "./products";

const INITIAL_STATE = products;
export const IngContext = createContext();

const IngContexProvider = (props) => {
  const [ingList, dispatch] = useReducer(ingredientReducer, INITIAL_STATE);

  return (
    <IngContext.Provider
      value={{
        ingList,
        dispatch,
      }}
    >
      {props.children}
    </IngContext.Provider>
  );
};

export default IngContexProvider;
