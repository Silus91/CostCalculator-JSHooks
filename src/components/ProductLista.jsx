import React, { Component } from "react";
import products from "./products";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productRatio: "",
      divider: "",
      productWeight: "",
      productSum: "",
      list: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const usedProduct = {
      productWeight: this.state.productWeight,
      productRatio: this.state.productRatio,
    };

    this.setState({
      list: [...this.state.list, usedProduct],
      productWeight: "",
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSelectChange = (event) => {
    this.setState({ productRatio: event.target.value });
  };

  handleDivideSubmit = (event) => {
    event.preventDefault();

    console.log("wynik", this.state.productSum / this.state.divider);
  };

  render() {
    this.props = { products };
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <select onChange={this.handleSelectChange}>
                <option label='Pick product' value={null} />
                {products.map((product) => (
                  <option
                    name='productRatio'
                    label={product.name}
                    key={product.id}
                    value={product.cost / product.weight}
                  />
                ))}
              </select>
            </label>
            <input
              name='productWeight'
              type='number'
              value={this.state.productWeight}
              onChange={this.handleChange}
            />
            <input type='submit' value='Submit' />
          </form>
          <div>
            <ul>
              {(this.state.list || []).map((item, index) => (
                <li key={index}>
                  {(item.productRatio * item.productWeight).toFixed(3)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            Total costs of a batch in pounds
            <br />
            <form onSubmit={this.handleDivideSubmit}>
              <input
                name='productSum'
                type='number'
                value={
                  (this.state.productSum = this.state.list
                    .reduce(
                      (prev, next) =>
                        prev + next.productRatio * next.productWeight,
                      0
                    )
                    .toFixed(2))
                }
                onChange={this.handleChange}
              />
              <input
                name='divider'
                type='number'
                value={this.state.divider}
                onChange={this.handleChange}
              />
              <button type='submit'>Divide</button>
            </form>
            <h3>
              {(this.state.productSum / this.state.divider
                ? this.state.productSum / this.state.divider
                : 0
              ).toFixed(3)}
            </h3>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
