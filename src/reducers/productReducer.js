export const productReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT_ADD":
      return [...state, action.payload];
    case "PRODUCT_DELETE":
      console.log(state);
      return state.filter((product) => product.id !== action.payload);

    //todo be fixed delete
    default:
      return state;
  }
};
