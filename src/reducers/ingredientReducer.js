export const ingredientReducer = (state, action) => {
  switch (action.type) {
    case "INGREDIENT_ADD":
      return [...state, action.payload];
    case "INGREDIENT_DELETE":
      return {
        ...state,
        ingredientsList: state.ingredientsList.filter(
          (ingredient) => ingredient.id !== action.payload.id
        ),
      };
    //todo be fixed delete
    default:
      return state;
  }
};
