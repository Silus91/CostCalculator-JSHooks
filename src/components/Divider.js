import React, { useContext, useState } from "react";
import { ComponentContext } from "../contexts/ComponentContext";

const Divider = () => {
  const { componentList } = useContext(ComponentContext);

  const [state, setState] = useState({
    divider: "",
    valuePerItem: "",
  });
  console.log(componentList);
  const handleChange = (event) => {
    setState({ ...state, divider: event.target.value });
  };

  const totalCost = componentList
    .reduce((prev, next) => prev + next.componentCost, 0)
    .toFixed(2);

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({ ...state, valuePerItem: totalCost / state.divider });
    // const reciple = {
    //   id: Math.floor(Math.random() * 1000000) + 1, //maybe later to change
    // };
  };
  const { divider, valuePerItem } = state;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='input-field col s12'>
          <input
            type='number'
            name='divider'
            className='validate'
            value={divider}
            onChange={handleChange}
          />
          <label htmlFor='divider'>Divider</label>
        </div>
        <button type='submit' className='btn teal darken-2 z-depth-2'>
          Submit
        </button>
      </form>
      <span className='flow-text'>
        Total Value GBP
        <p className='red-text'>{parseFloat(totalCost).toFixed(2)}</p>
      </span>
      <br />
      <span className='flow-text'>
        Per 1 Item GBP
        <p className='red-text'>{parseFloat(valuePerItem).toFixed(2)}</p>
      </span>
    </div>
  );
};

export default Divider;
