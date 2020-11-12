import react, { useState, createContext } from "react";
import ingredients from "./ingredients";

const INITIAL_STATE = ingredients;
const IngredientContext = createContext();

const IngredientContexProvider = (props) => {
  const [ingredientsList, dispatch] = useReducer(
    ingredientReducer,
    INITIAL_STATE,
    init
  );

  const addIngredientToList = (newIngredient) => {
    this.setState({
      ingredientList: [...this.state.ingredientList, newIngredient],
    });
  };

  return (
    <IngredientContext.Provider
      value={{
        ...this.state,
        addIngredientToList: this.addIngredientToList,
      }}
    >
      {this.props.children}
    </IngredientContext.Provider>
  );
};

export default IngredientContexProvider;
