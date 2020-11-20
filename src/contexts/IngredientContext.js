import React, { useReducer, createContext } from "react";
import { ingredientReducer } from "../reducers/ingredientReducer";
import ingredients from "./ingredients";

const list = ingredients;
export const IngredientContext = createContext();

const IngredientContextProvider = (props) => {
  const [ingredientsList, dispatch] = useReducer(ingredientReducer, list);

  return (
    <IngredientContext.Provider
      value={{
        ingredientsList,
        dispatch,
      }}
    >
      {props.children}
    </IngredientContext.Provider>
  );
};

export default IngredientContextProvider;
