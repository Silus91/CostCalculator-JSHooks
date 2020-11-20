export const ingredientReducer = (state, action) => {
  switch (action.type) {
    case "INGREDIENT_ADD":
      return [...state, action.payload];
    case "INGREDIENT_DELETE":
      return state.filter((ingredient) => ingredient.id !== action.payload);

    default:
      return state;
  }
};
