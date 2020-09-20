import React, { useEffect, useState } from "react";
import M from "materialize-css";
import TextInput from "./TextInput";
import AddComponent from "./AddComponent";
import ComponentList from "./ComponentList";

const CreateRecipe = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [state, setState] = useState({
    productName: "",
    ingredientWeight: "",
    componentList: [],
    divider: "",
  });

  const addComponentToList = (newComponent) => {
    setState({
      componentList: state.componentList.concat(newComponent),
    });
    console.log(state.componentList);
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newIngredient = {
      id: Math.floor(Math.random() * 1000000) + 1, //maybe later to change
      productName: state.productName,
      divider: parseFloat(state.divider),
    };
    setState({ productName: "", divider: "" });
    console.log(newIngredient);
  };

  return (
    <div>
      <ul className='collapsible'>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'> add_circle</i>
            Create Reciple
          </div>
          <div className='collapsible-body card'>
            <AddComponent addComponentToList={addComponentToList} />
            <div className='divider'></div>
            <div>
              <ComponentList componentList={state.componentList} />
            </div>
            <form onSubmit={handleSubmit}>
              <div className='input-field col s12'>
                <input
                  type='text'
                  name='productName'
                  className='validate'
                  onChange={handleChange}
                />
                <label htmlFor='productName'>productName Name</label>
              </div>
              <div className='input-field col s12'>
                <input
                  type='number'
                  className='validate'
                  name='divider'
                  onChange={handleChange}
                />
                <label htmlFor='divider'>divider Cost</label>
              </div>
              <button type='submit' className='btn'>
                Submit
              </button>
            </form>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CreateRecipe;
