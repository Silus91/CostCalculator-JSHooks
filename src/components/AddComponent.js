import React, { useContext, useState, useEffect } from "react";
import M from "materialize-css";
import { v1 as uuidv1 } from "uuid";
import { IngredientContext } from "../contexts/IngredientContext";

const AddComponent = ({ addComponentToList }) => {
  const [state, setState] = useState({
    componentWeight: "",
    ingredientRatio: "",
  });

  const { ingredientsList } = useContext(IngredientContext);

  useEffect(() => {
    M.AutoInit();
  }, []);

  console.log(ingredientsList);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newComponent = {
      id: uuidv1(),
      ingredientName: state.ingredientRatio.replace(/[0-9.]/g, ""),
      ingredientRatio: parseFloat(state.ingredientRatio.split(" ")[0]),
      componentWeight: parseFloat(state.componentWeight),
      componentCost: parseFloat(
        state.ingredientRatio.split(" ")[0] * state.componentWeight
      ),
    };
    addComponentToList(newComponent);
    setState({ ...state, componentWeight: "", ingredientRatio: "" });
  };

  const handleChange = (event) => {
    console.log(event.target.label);
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='card-content'>
      <form onSubmit={handleSubmit}>
        <div className=''>
          <select name='ingredientRatio' onChange={handleChange}>
            <option> Select one</option>
            {ingredientsList.map((ingredient) => {
              return (
                <option
                  key={ingredient.id}
                  value={`${ingredient.ingredientRatio} ${ingredient.ingredientName}`}
                  label={1}
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
