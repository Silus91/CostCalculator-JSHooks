import React, { useState } from "react";

const Divider = (props) => {
  const [state, setState] = useState({
    divider: "",
    valuePerItem: "",
  });
  const handleChange = (event) => {
    setState({ ...state, divider: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({ ...state, valuePerItem: props.totalCost / state.divider });
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
        <p className='red-text'>{parseFloat(props.totalCost).toFixed(2)}</p>
      </span>
      <br />
      Per 1 Item GBP
      <p className='red-text'>{parseFloat(valuePerItem).toFixed(2)}</p>
      Aproxx ~ Weight of 1 item +-
      <p className='red-text'>
        {parseFloat(props.totalWeight / divider).toFixed(2)}
      </p>
    </div>
  );
};

export default Divider;
