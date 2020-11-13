import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import M from "materialize-css";
import TextInput from "./TextInput";
import AddComponent from "./AddComponent";
import ComponentList from "./ComponentList";
import Collapsible from "./Collapsible";
import { v1 as uuidv1 } from "uuid";

const CreateRecipe = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [state, setState] = useState({
    productName: "",
    componentList: [],
    firstRatio: "",
  });

  const { addProductToList } = useContext(ProductContext);
  //might change name if this const in the future
  const mapData = (newComponent) => {
    if (state.componentList.length <= 0) {
      setState({
        ...state,
        firstRatio: (state.firstRatio = newComponent.componentWeight),
      });
      newComponent.productRatio = state.firstRatio;
    } else {
      newComponent.productRatio =
        newComponent.componentWeight / state.firstRatio;
    }
  };

  const addComponentToList = (newComponent) => {
    mapData(newComponent);
    setState({
      ...state,
      componentList: state.componentList.concat(newComponent),
    });
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
      id: uuidv1(),
      productName: state.productName,
      componentList: state.componentList,
    };
    addProductToList(newProduct);
    setState({ ...state, productName: "", componentList: [] });
  };

  return (
    <Collapsible icon='add_circle' title='Create Reciple'>
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
    </Collapsible>
  );
};

export default CreateRecipe;
