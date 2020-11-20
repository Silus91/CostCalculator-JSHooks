import React, { useState, useContext, useEffect } from "react";
import M from "materialize-css";
import TextInput from "./TextInput";
import { IngredientContext } from "../contexts/IngredientContext";

const EditIngredient = (props) => {
  const { dispatch } = useContext(IngredientContext);

  const [state, setState] = useState({
    ingredientName: "",
    ingredientCost: "",
    ingredientWeight: "",
  });
  useEffect(() => {
    M.AutoInit();
    setState({
      ...state,
      ingredientName: props.ingredient.ingredientName,
      ingredientCost: props.ingredient.ingredientCost,
      ingredientWeight: props.ingredient.ingredientWeight,
    });
  }, []);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const renderId = (id) => {
    if (id) {
      return id;
    } else {
      return "#id";
    }
  };

  return (
    <div>
      <a
        className='waves-effect waves-light btn modal-trigger'
        data-target={renderId(props.ingredient.id)}
      >
        Edit
      </a>
      <div id={renderId(props.ingredient.id)} className='modal'>
        <form onSubmit={handleSubmit}>
          <div className='modal-content'>
            <TextInput
              type='text'
              name='ingredientName'
              className='validate'
              value={state.ingredientName}
              onChange={handleChange}
              htmlFor='ingredientName'
              label='Ingredient Name'
            />

            <TextInput
              type='number'
              className='validate'
              name='ingredientCost'
              value={state.ingredientCost}
              onChange={handleChange}
              htmlFor='ingredientCost'
              label='Ingredient Cost'
            />
            <TextInput
              type='number'
              className='validate'
              name='ingredientWeight'
              value={state.ingredientWeight}
              onChange={handleChange}
              htmlFor='ingredientWeight'
              label='Ingredient Weight'
            />

            <div className='modal-footer'>
              <button
                type='submit'
                // className={
                //   state.ingredientCost <= 0 ||
                //   state.ingredientName <= 0 ||
                //   state.ingredientWeight <= 0
                //     ? "btn disabled"
                //     : "btn teal darken-2 z-depth-2"
                // }
              >
                Submit Edit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditIngredient;
