import React, { useEffect, useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import M from "materialize-css";
import Collapsible from "./Collapsible";

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

  const renderRatio = (product, component) => {
    renderCosts(product, component);
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
      const totalWeight = component.productRatio * state.usedWeight;
      return parseFloat(totalWeight).toFixed(2);
    }
  };

  const renderCosts = (product, component) => {
    let cost = costsCounter(product, component);
    component.usedCost = cost;
    return cost;
  };

  const costsCounter = (product, component) => {
    if (component.id === product.componentList[0].id) {
      return state.usedWeight * component.ingredientRatio;
    } else {
      return (
        component.productRatio * state.usedWeight * component.ingredientRatio
      );
    }
  };

  const sumTotalCost = (product) => {
    const arr = product.componentList.map((component) => {
      return component.usedCost;
    });
    const totalValue = arr.reduce((prev, next) => {
      return prev + next;
    });

    return totalValue;
  };

  const tableTitle = ["Name", "Weight", "Cost", "Used Weight"];

  return (
    <Collapsible title='Product Scale' icon='eject'>
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
                          {tableTitle.map((title) => {
                            return <td key={title}>{title}</td>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {product.componentList.map((component) => {
                          return (
                            <tr key={component.id}>
                              <td>{component.ingredientName}</td>
                              <td>{component.componentWeight}</td>
                              <td>
                                {parseFloat(component.usedCost).toFixed(2)}
                              </td>
                              <td>{renderRatio(product, component)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <div>{sumTotalCost(product)}</div>
                    <div>total weight</div>
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

export default ProductScale;
