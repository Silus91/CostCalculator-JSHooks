import React, { useState, useReducer } from "react";

const NewProductForm = () => {
  const [newProduct, setNewProduct] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: "",
      lastName: "",
      phoneNumber: "",
    }
  );
  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;
    setUserInput({ [name]: newValue });
  };

  return (
    <div>
      <br />
      <label>First Name: </label>
      {userInput.firstName}
      <br />
      <input
        type='text'
        name='firstName'
        value={userInput.firstName}
        onChange={handleChange}
      />

      <br />
      <label>Last Name: </label>
      {userInput.lastName}
      <br />
      <input
        type='text'
        name='lastName'
        value={userInput.lastName}
        onChange={handleChange}
      />

      <br />
      <label>Phone Number: </label>
      {userInput.phoneNumber}
      <br />
      <input
        type='text'
        name='phoneNumber'
        value={userInput.phoneNumber}
        onChange={handleChange}
      />
    </div>
  );
};

export default NewProductForm;
