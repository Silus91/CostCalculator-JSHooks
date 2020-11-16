import React, { useEffect, useState } from "react";
import M from "materialize-css";
import Divider from "./Divider";

const ProductTable = (props) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [state, setState] = useState({
    usedWeight: 0,
    totalCost: 0,
    totalWeight: 0,
  });

  const handleChange = (event) => {
    const eventTargetValue = parseFloat(event.target.value);
    const sumTotalCost = totalValue(eventTargetValue);
    const sumTotalWeight = totalWeight(eventTargetValue);

    setState({
      ...state,
      usedWeight: event.target.value,
      totalCost: (state.totalCost = sumTotalCost),
      totalWeight: (state.totalWeight = sumTotalWeight),
    });
  };

  const totalValue = (eventTargetValue) => {
    const arr = props.product.componentList.map((component) => {
      if (component.id === props.product.componentList[0].id) {
        return eventTargetValue * component.ingredientRatio;
      } else {
        return (
          component.productRatio * eventTargetValue * component.ingredientRatio
        );
      }
    });
    return arr.reduce((prev, next) => {
      return prev + next;
    });
  };

  const totalWeight = (eventTargetValue) => {
    const arr = props.product.componentList.map((component) => {
      if (component.id === props.product.componentList[0].id) {
        return eventTargetValue;
      } else {
        console.log(eventTargetValue);
        return component.productRatio * eventTargetValue;
      }
    });
    console.log(arr);
    return arr.reduce((prev, next) => {
      return parseFloat(prev + next);
    });
  };

  const renderRatio = (product, component) => {
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
      const usedComponentWeight = component.productRatio * state.usedWeight;
      return parseFloat(usedComponentWeight).toFixed(2);
    }
  };

  const tableTitle = ["Name", "Weight", "Used Weight"];

  return (
    <li key={props.product.id}>
      <div className='collapsible-header'>{props.product.productName}</div>
      <div className='collapsible-body'>
        <div className=''>
          <h3>{props.product.productName}</h3>
          <table className='striped'>
            <thead>
              <tr>
                {tableTitle.map((title) => {
                  return <td key={title}>{title}</td>;
                })}
              </tr>
            </thead>
            <tbody>
              {props.product.componentList.map((component) => {
                return (
                  <tr key={component.id}>
                    <td>{component.ingredientName}</td>
                    <td>{component.componentWeight}</td>
                    <td>{renderRatio(props.product, component)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>Total Cost:{parseFloat(state.totalCost).toFixed(2)}</div>
          <div>Total Weight:{parseFloat(state.totalWeight).toFixed(2)}</div>
        </div>
        <div>
          <Divider
            totalWeight={state.totalWeight}
            totalCost={state.totalCost}
          />
        </div>
      </div>
    </li>
  );
};

export default ProductTable;

//   const sumTotal = (eventTargetValue, arg) => {
//     const arr = props.product.componentList.map((component) => {
//       if (component.id === props.product.componentList[0].id) {
//         return eventTargetValue * arg;
//       } else {
//         return (
//           component.productRatio * eventTargetValue * arg
//         );
//       }
//     });
//     return arr.reduce((prev, next) => {
//       return prev + next;
//     });
//   };
