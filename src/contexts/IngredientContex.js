import React, { Component, createContext } from "react";
import ingredients from "../components/ingredients";

const INITIAL_STATE = ingredients;
export const IngredientContext = createContext();

class IngredientContexProvider extends Component {
  state = {
    ingredientList: INITIAL_STATE,
  };

  addIngredientToList = (newIngredient) => {
    this.setState({
      ingredientList: [...this.state.ingredientList, newIngredient],
    });
  };

  render() {
    return (
      <div>
        <IngredientContext.Provider
          value={{
            ...this.state,
            addIngredientToList: this.addIngredientToList,
          }}
        >
          {this.props.children}
        </IngredientContext.Provider>
      </div>
    );
  }
}

export default IngredientContexProvider;
