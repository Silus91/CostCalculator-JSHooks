import React, { useState, useContext, useEffect } from "react";
import { INGREDIENT_ADD } from "../types/types";
import { IngredientContext } from "../contexts/IngredientContext";
import M from "materialize-css";
import Collapsible from "./Collapsible";
import { v1 as uuidv1 } from "uuid";
import TextInput from "./TextInput";

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

  const dataMap = () => {
    const newIngredient = {
      id: uuidv1(),
      ingredientName: state.ingredientName,
      ingredientCost: parseFloat(state.ingredientCost),
      ingredientWeight: parseFloat(state.ingredientWeight),
      ingredientRatio: parseFloat(
        state.ingredientCost / state.ingredientWeight
      ),
    };
    return newIngredient;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newIngredient = dataMap();
    dispatch({ type: INGREDIENT_ADD, payload: newIngredient });
    setState({ ingredientWeight: "", ingredientName: "", ingredientCost: "" });
    console.log(newIngredient);
  };

  return (
    <Collapsible title='Add Ingredient' icon='add_circle'>
      <div className='card-content'>
        <form onSubmit={handleSubmit}>
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
          <button
            type='submit'
            className={
              state.ingredientCost <= 0 ||
              state.ingredientName <= 0 ||
              state.ingredientWeight <= 0
                ? "btn disabled"
                : "btn teal darken-2 z-depth-2"
            }
          >
            Submit
          </button>
        </form>
      </div>
    </Collapsible>
  );
};

export default AddIngredient;
