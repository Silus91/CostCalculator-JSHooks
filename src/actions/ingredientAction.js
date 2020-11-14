import { INGREDIENT_ADD, INGREDIENT_DELETE } from "../types/types";

export const addIngredient = (newIngredient) => (dispatch) => {
  dispatch({ type: INGREDIENT_ADD, payload: newIngredient.data });
};

export const deleteIngredient = (id) => (dispatch) => {
  dispatch({ type: INGREDIENT_DELETE, payload: id });
};
