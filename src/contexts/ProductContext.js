import React, { Component, createContext } from "react";
import products from "../components/products";

const INITIAL_STATE = products;
export const ProductContext = createContext();

class ProductContexProvider extends Component {
  state = {
    productList: INITIAL_STATE,
  };

  addProductToList = (newProduct) => {
    this.setState({
      productList: [...this.state.productList, newProduct],
    });
  };

  render() {
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            addProductToList: this.addProductToList,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}

export default ProductContexProvider;
