import React, { useState } from "react";
import { Button } from "./Button";
import TextInput from "./TextInput";

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
        <TextInput
          type='number'
          className='validate'
          name='divider'
          value={divider}
          onChange={handleChange}
          htmlFor='divider'
          label='Divider'
        />
        <Button
          type='submit'
          className={
            divider <= 0
              ? "btn disabled"
              : "btn teal darken-2 z-depth-2 modal-close"
          }
          text='Divide'
        />
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
