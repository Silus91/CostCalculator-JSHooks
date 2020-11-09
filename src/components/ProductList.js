import React, { useEffect, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import M from "materialize-css";
import Collapsible from "./Collapsible";

const ProductList = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const { productList } = useContext(ProductContext);

  return (
    <Collapsible title='Product List' icon='list'>
      <div className='card-content'>
        <ul className='collapsible popout'>
          {productList.map((product) => {
            return (
              <li key={product.id}>
                <div className='collapsible-header'>{product.productName}</div>
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
                              <td>{component.ingredientName}</td>
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
    </Collapsible>
  );
};

export default ProductList;
