import React, { useEffect, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import M from "materialize-css";
import Collapsible from "./Collapsible";
import { PRODUCT_DELETE } from "../types/types";

const ProductList = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const { productsList, dispatch } = useContext(ProductContext);

  console.log(productsList);
  return (
    <Collapsible title='Product List' icon='list'>
      <div className='card-content'>
        <ul className='collapsible popout'>
          {productsList.map((product) => {
            return (
              <li key={product.id}>
                <div className='collapsible-header'>
                  <p>{product.productName}</p>
                </div>
                <div className='collapsible-body'>
                  <div className=''>
                    <h3>{product.productName}</h3>
                    <button
                      onClick={() =>
                        dispatch({
                          type: PRODUCT_DELETE,
                          payload: product.id,
                        })
                      }
                    >
                      <i className='material-icons'>delete_forever</i>
                    </button>
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
