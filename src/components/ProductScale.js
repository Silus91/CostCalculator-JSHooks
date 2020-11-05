import React, { useEffect, useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import M from "materialize-css";

const ProductScale = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [state, setState] = useState({
    usedWeight: "",
  });

  const { productList } = useContext(ProductContext);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  // need to put this into reusable functions const etc minimum in render extract map functions if possible
  return (
    <div>
      <ul className='collapsible'>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'>eject</i>
            Product Scale
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
                                  <td>ID</td>
                                  <td>Name</td>
                                  <td>Weight</td>
                                  <td>Product ratio</td>
                                </tr>
                              </thead>
                              <tbody>
                                {product.componentList.map((component) => {
                                  return (
                                    <tr key={component.id}>
                                      <td>{component.id}</td>

                                      <td>{component.ingredientName}</td>
                                      <td>{component.componentWeight}</td>
                                      <td>
                                        {component.id ===
                                        product.componentList[0].id ? (
                                          <form>
                                            <input
                                              type='number'
                                              name='usedWeight'
                                              value={state.usedWeight}
                                              className='validate'
                                              onChange={handleChange}
                                            />
                                          </form>
                                        ) : (
                                          component.productRatio *
                                          state.usedWeight
                                        )}
                                      </td>
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

export default ProductScale;
