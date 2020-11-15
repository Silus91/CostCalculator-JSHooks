export const productReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT_ADD":
      return [...state, action.payload];
    case "PRODUCT_DELETE":
      return {
        ...state,
        productsList: state.productsList.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    //todo be fixed delete
    default:
      return state;
  }
};
