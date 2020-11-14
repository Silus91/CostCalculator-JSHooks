import React, { useState, useContext, useEffect } from "react";
import { INGREDIENT_ADD } from "../types/types";
import { IngredientContext } from "../contexts/IngredientContex";
import M from "materialize-css";
import Collapsible from "./Collapsible";
import { v1 as uuidv1 } from "uuid";

const AddIngredient = () => {
  const [state, setState] = useState({
    ingredientName: "",
    ingredientCost: "",
    ingredientWeight: "",
  });
  const { dispatch } = useContext(IngredientContext);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newIngredient = {
      id: uuidv1(),
      ingredientName: state.ingredientName,
      ingredientCost: parseFloat(state.ingredientCost),
      ingredientWeight: parseFloat(state.ingredientWeight),
      ingredientRatio: parseFloat(
        state.ingredientCost / state.ingredientWeight
      ),
    };
    dispatch({ type: INGREDIENT_ADD, payload: newIngredient });
    setState({ ingredientWeight: "", ingredientName: "", ingredientCost: "" });
    console.log(newIngredient);
  };

  return (
    <Collapsible title='Add Ingredient' icon='add_circle'>
      <div className='card-content'>
        <form onSubmit={handleSubmit}>
          <div className='input-field col s12'>
            <input
              type='text'
              name='ingredientName'
              className='validate'
              value={state.ingredientName}
              onChange={handleChange}
            />
            <label htmlFor='ingredientName'>Ingredient Name</label>
          </div>
          <div className='input-field col s12'>
            <input
              type='number'
              className='validate'
              name='ingredientCost'
              value={state.ingredientCost}
              onChange={handleChange}
            />
            <label htmlFor='ingredientCost'>Ingredient Cost</label>
          </div>
          <div className='input-field col s12'>
            <input
              type='number'
              name='ingredientWeight'
              className='validate'
              value={state.ingredientWeight}
              onChange={handleChange}
            />
            <label htmlFor='ingredientWeight'>Ingredient Weight</label>
          </div>
          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </div>
    </Collapsible>
  );
};

export default AddIngredient;
