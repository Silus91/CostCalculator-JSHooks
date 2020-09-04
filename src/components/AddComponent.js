import React, { useContext, useState, useEffect } from "react";
import { IngredientContext } from "../contexts/IngredientContex";
import { ComponentContext } from "../contexts/ComponentContext";
import M from "materialize-css";

const AddComponent = () => {
  const { ingredientList } = useContext(IngredientContext);
  const [state, setState] = useState({
    componentWeight: "",
    ingredientRatio: "",
  });

  useEffect(() => {
    M.AutoInit();
  }, []);

  const { addComponentToList } = useContext(ComponentContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComponent = {
      id: Math.floor(Math.random() * 1000000) + 1, //maybe later to change
      ingredientName: state.ingredientRatio.split(" ")[1], //todo with name more than 1 word
      ingredientRatio: parseFloat(state.ingredientRatio.split(" ")[0]),
      componentWeight: parseFloat(state.componentWeight),
      componentCost: parseFloat(
        state.ingredientRatio.split(" ")[0] * state.componentWeight
      ),
    };
    addComponentToList(newComponent);
    setState({ componentWeight: "", ingredientRatio: "" });
  };

  const handleChange = (event) => {
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
            {ingredientList.map((ingredient) => {
              return (
                <option
                  key={ingredient.id}
                  value={`${ingredient.ingredientRatio} ${ingredient.ingredientName}`}
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
