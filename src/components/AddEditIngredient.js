import React, { useState, useContext, useEffect } from "react";
import { INGREDIENT_ADD, INGREDIENT_EDIT } from "../types/types";
import M from "materialize-css";
import TextInput from "./TextInput";
import { IngredientContext } from "../contexts/IngredientContext";
import { v1 as uuidv1 } from "uuid";
import { Button } from "./Button";

const AddEditIngredient = (props) => {
  const { dispatch } = useContext(IngredientContext);

  const [state, setState] = useState({
    ingredientName: "",
    ingredientCost: "",
    ingredientWeight: "",
  });
  useEffect(() => {
    M.AutoInit();
    if (props.ingredient) {
      setState({
        ...state,
        ingredientName: props.ingredient.ingredientName,
        ingredientCost: props.ingredient.ingredientCost,
        ingredientWeight: props.ingredient.ingredientWeight,
      });
    }
  }, []);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const dataMap = () => {
    const newIngredient = {
      id: props.ingredient ? props.ingredient.id : uuidv1(),
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
    if (props.ingredient) {
      dispatch({
        type: INGREDIENT_EDIT,
        payload: newIngredient,
        id: newIngredient.id,
      });
    } else {
      dispatch({ type: INGREDIENT_ADD, payload: newIngredient });
    }
    setState({ ingredientWeight: "", ingredientName: "", ingredientCost: "" });
    console.log(newIngredient);
  };
  const { ingredientCost, ingredientName, ingredientWeight } = state;

  return (
    <div>
      <a
        className='waves-effect waves-light btn modal-trigger'
        data-target={props.id}
      >
        {props.ingredient ? "Edit" : "Add New"}
      </a>
      <div id={props.id} className='modal'>
        <form onSubmit={handleSubmit}>
          <div className='modal-content'>
            <h4> {props.ingredient ? "Edit" : "Add New Ingredient"}</h4>
            <TextInput
              type='text'
              name='ingredientName'
              className='validate'
              value={ingredientName}
              onChange={handleChange}
              htmlFor='ingredientName'
              label='Ingredient Name'
            />

            <TextInput
              type='number'
              className='validate'
              name='ingredientCost'
              value={ingredientCost}
              onChange={handleChange}
              htmlFor='ingredientCost'
              label='Ingredient Cost'
            />
            <TextInput
              type='number'
              className='validate'
              name='ingredientWeight'
              value={ingredientWeight}
              onChange={handleChange}
              htmlFor='ingredientWeight'
              label='Ingredient Weight'
            />

            <div className='modal-footer'>
              <Button
                type='submit'
                className={
                  ingredientCost <= 0 ||
                  ingredientName <= 0 ||
                  ingredientWeight <= 0
                    ? "btn disabled"
                    : "btn teal darken-2 z-depth-2 modal-close"
                }
                text='submit'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditIngredient;
