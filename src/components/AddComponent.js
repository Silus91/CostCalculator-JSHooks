import React, { useContext, useState, useEffect } from "react";
import { IngredientContext } from "../contexts/IngredientContex";
import M from "materialize-css";
import { v1 as uuidv1 } from "uuid";

const AddComponent = ({ addComponentToList }) => {
  const { ingredientsList } = useContext(IngredientContext);
  const [state, setState] = useState({
    componentWeight: "",
    ingredientRatio: "",
    componentName: "",
  });

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComponent = {
      id: uuidv1(),
      ingredientName: state.ingredientRatio.split(" ")[1], //todo with name more than 1 word
      ingredientRatio: parseFloat(state.ingredientRatio.split(" ")[0]),
      componentWeight: parseFloat(state.componentWeight),
      componentCost: parseFloat(
        state.ingredientRatio.split(" ")[0] * state.componentWeight
      ),
      usedCost: 0,
      usedWeight: 0,
    };

    addComponentToList(newComponent);
    setState({ ...state, componentWeight: "", ingredientRatio: "" });
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  //test dla ingredient ratio zeby bylo arrayem i zeby bylko latwiej dostac te value jeseli sie da i potem przerobic z powrotem na string albo number

  return (
    <div className='card-content'>
      <form onSubmit={handleSubmit}>
        <div className=''>
          <select name='ingredientRatio' onChange={handleChange}>
            {ingredientsList.map((ingredient) => {
              return (
                <option
                  key={ingredient.id}
                  value={`${ingredient.ingredientRatio} ${ingredient.ingredientName}`}
                  label={ingredient.ingredientName}
                >
                  {ingredient.ingredientName}
                </option>
              );
            })}
          </select>
        </div>
        <div className='input-field col s12'>
          <input
            type='number'
            name='componentWeight'
            className='validate'
            value={state.componentWeight}
            onChange={handleChange}
          />
          <label htmlFor='componentWeight'>Component Weight</label>
        </div>
        <button type='submit' className='btn teal darken-2 z-depth-2'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddComponent;
