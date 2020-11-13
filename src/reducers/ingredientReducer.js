export const ingredientReducer = (state, action) => {
  switch (action.type) {
    case "INGREDIENT_ADD":
      return [...state, action.payload];
    case "INGREDIENT_DELETE":
      return {
        ...state,
        ingredientsList: state.ingredientsList.filter(
          (ingredient) => ingredient.id !== action.id
        ),
      };

    //   return {
    //     ...state,
    //     ingredientsList: state.ingredientsList.filter((ingredient) => {
    //       return ingredient.id !== action.id;
    //     }),
    //   };

    //   return {
    //     ...state,
    //     clubs: state.clubs.filter(club => {
    //       action = action as DeleteClubInterface;
    //       return club.id !== action.clubId;
    //     }),
    //   };
    default:
      return state;
  }
};
