import React, { useReducer, createContext } from "react";
import { ingredientReducer } from "../reducers/ingredientReducer";
import ingredients from "./ingredients";

const INITIAL_STATE = ingredients;
export const IngredientContext = createContext();

const IngredientContextProvider = (props) => {
  const [ingredientsList, dispatch] = useReducer(
    ingredientReducer,
    INITIAL_STATE
  );

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
