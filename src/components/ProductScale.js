import React, { useEffect, useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import M from "materialize-css";
import Collapsible from "./Collapsible";
import Divider from "./Divider";

const ProductScale = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [state, setState] = useState({
    usedWeight: 0,
    totalCost: 0,
    totalWeight: 0,
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
      component.usedWeight = parseFloat(state.usedWeight);
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
      const usedProductWeight = component.productRatio * state.usedWeight;
      component.usedWeight = usedProductWeight;
      return parseFloat(usedProductWeight).toFixed(2);
    }
  };
  console.log(productList);

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
    const usedCostArray = product.componentList.map((component) => {
      return component.usedCost;
    });
    const totalValue = usedCostArray.reduce((prev, next) => {
      return prev + next;
    });

    return totalValue;
  };

  // const sumTotal = (mapArgument, mapedArg, asd) => {
  //   const usedValueArray = mapArgument.componentList.map((mapedArg) => {
  //     return asd;
  //   });
  //   const totalValue = usedValueArray.reduce((prev, next) => {
  //     return prev + next;
  //   });

  //   return totalValue;
  // };

  const sumTotalWeight = (product) => {
    const usedWeightArray = product.componentList.map((component) => {
      return component.usedWeight;
    });

    const totalWeight = usedWeightArray.reduce((prev, next) => {
      return prev + next;
    });
    return totalWeight;
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
                    <div>{parseFloat(sumTotalCost(product)).toFixed(2)}</div>
                    <div>{parseFloat(sumTotalWeight(product)).toFixed(2)}</div>
                    <Divider totalValue={3} />
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

//set ktory rowna sie ilosci zmapowanego product rate albo cos tkaiego  a values to wlasnie ratio albo cos usedcost

//akcje i reducery trzeba ustawic wzgledem contextu
