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
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { productName: state.productName };

    console.log(newProduct);
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
            <ComponentList componentList={state.componentList} />
            <form onSubmit={handleSubmit}>
              <TextInput
                name='productName'
                type='text'
                label='New Product Name'
                onChange={handleChange}
              />
              <TextInput
                name='divider'
                type='number'
                label='Quantity'
                onChange={handleChange}
              />

              <button type='submit' className='btn teal darken-2 z-depth-2'>
                Submit
              </button>
            </form>
            <ul>
              {state.componentList.map((component) => {
                return (
                  <li key={component.id}>
                    <span className='flow-text'>
                      {component.ingredientName}
                    </span>
                    <span className='flow-text'>
                      {parseFloat(component.componentCost).toFixed(2)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CreateRecipe;
