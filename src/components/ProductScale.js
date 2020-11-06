import React, { useEffect, useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import M from "materialize-css";

const ProductScale = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [state, setState] = useState({
    usedWeight: "",
    totalWeight: "",
    totalCost: "",
  });

  const { productList } = useContext(ProductContext);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const renderRatio = (product, component) => {
    if (component.id === product.componentList[0].id) {
      return (
        <form>
          <input
            type='number'
            name='usedWeight'
            className='validate'
            onChange={handleChange}
          />
        </form>
      );
    } else {
      return parseFloat(component.productRatio * state.usedWeight).toFixed(2);
    }
  };

  const renderCosts = (product, component) => {
    console.log(
      product.componentList.map((component) => {
        return component.componentWeight;
      })
    );
    if (component.id === product.componentList[0].id) {
      return parseFloat(state.usedWeight * component.ingredientRatio).toFixed(
        2
      );
    } else {
      return parseFloat(
        component.productRatio * state.usedWeight * component.ingredientRatio
      ).toFixed(2);
    }
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
                                  <td>Costs</td>
                                  <td>Used Weight</td>
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
                                        {parseFloat(
                                          renderCosts(product, component)
                                        ).toFixed(2)}
                                      </td>
                                      <td>{renderRatio(product, component)}</td>
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
