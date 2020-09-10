import React, { useEffect, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import M from "materialize-css";

const ProductList = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const { productList } = useContext(ProductContext);

  //   const totalWeight = productList.reduce(
  //     (prev, next) => prev + next.componentList.componentWeight,
  //     0
  //   );
  //todo redoce component weight total cost total etc and stuff

  console.log(productList);

  return (
    <div>
      <ul className='collapsible'>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'>list</i>
            Product List
          </div>
          <div className='collapsible-body'>
            <div className=''>
              <div className='card-content'>
                <ul className='collapsible popout'>
                  {productList.map((product) => {
                    return (
                      <li key={product.id}>
                        <div className='collapsible-header'>
                          {product.productName}
                        </div>
                        <div className='collapsible-body'>
                          <div className=''>
                            <h3>{product.productName}</h3>
                            <table className='striped'>
                              <thead>
                                <tr>
                                  <td>Name</td>
                                  <td>Weight</td>
                                  <td>Cost</td>
                                </tr>
                              </thead>
                              <tbody>
                                {product.componentList.map((component) => {
                                  return (
                                    <tr key={component.id}>
                                      <td> {component.ingredientName}</td>
                                      <td>{component.componentWeight}</td>
                                      <td>{component.componentCost}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductList;
