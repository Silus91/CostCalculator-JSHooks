import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
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
    componentList: [],
  });

  const { addProductToList } = useContext(ProductContext);

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
    const newProduct = {
      id: Math.floor(Math.random() * 1000000) + 1, //maybe later to change
      productName: state.productName,
      componentList: state.componentList,
    };
    addProductToList(newProduct);
    setState({ ...state, productName: "", componentList: [] });
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
                <label htmlFor='productName'>Product Name</label>
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
