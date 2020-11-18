export const ingredientReducer = (state, action) => {
  switch (action.type) {
    case "INGREDIENT_ADD":
      return [...state, action.payload];
    case "INGREDIENT_DELETE":
      const newList = state.ingredientsList.filter(
        (ingre) => ingre.id !== action.payload
      );
      return { ...state, ingredientsList: newList };

    //todo be fixed delete
    default:
      return state;
  }
};

// state.ingredientsList.filter((ing) => ing.id !== action.id);

// return {
//   ...state,
//   state: state.ingredientsList.filter(
//     (ingredient) => ingredient.id !== action.payload
//   ),
// };
