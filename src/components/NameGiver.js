import React, { useState } from "react";

const NameGiver = ({ nameContainer }) => {
  const [state, setState] = useState({
    productName: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const productName = state.productName;
    nameContainer(productName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='input-field col s12'>
          <input
            type='text'
            name='productName'
            className='validate'
            value={state.productName}
            onChange={handleChange}
          />
          <label htmlFor='productName'>Product Name</label>
        </div>
        <button type='submit' className='btn teal darken-2 z-depth-2'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NameGiver;
