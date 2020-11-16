export const ingReducer = (state, action) => {
  switch (action.type) {
    case "ING_ADD":
      return [...state, action.payload];
    case "INGREDIENT_DELETE":
      return state.ingList.filter((ing) => ing.id !== action.id);
    //   ...state,
    //   ingredientsList: state.ingredientsList.filter(
    //     (ingredient) => ingredient.id !== action.payload.id
    //   ),

    //todo be fixed delete
    default:
      return state;
  }
};
