import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import M from "materialize-css";
import TextInput from "./TextInput";
import AddComponent from "./AddComponent";
import ComponentList from "./ComponentList";
import Collapsible from "./Collapsible";
import { v1 as uuidv1 } from "uuid";
import { PRODUCT_ADD } from "../types/types";
import { Button } from "./Button";
import { IngredientContext } from "../contexts/IngredientContext";

const CreateRecipe = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [state, setState] = useState({
    productName: "",
    componentList: [],
    firstRatio: "",
  });

  const { ingredientsList } = useContext(IngredientContext);

  const { dispatch } = useContext(ProductContext);

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
    dispatch({ type: PRODUCT_ADD, payload: newProduct });
    setState({
      ...state,
      productName: "",
      componentList: [],
      firstRatio: "",
    });
    console.log(newProduct);
  };

  return (
    <Collapsible icon='add_circle' title='Create Reciple'>
      <AddComponent
        addComponentToList={addComponentToList}
        ingredientsList={ingredientsList}
      />
      <div className='divider'></div>
      <div>
        <ComponentList componentList={state.componentList} />
      </div>
      <form onSubmit={handleSubmit}>
        <TextInput
          type='text'
          name='productName'
          className='validate'
          value={state.productName}
          onChange={handleChange}
          htmlFor='productName'
          label='Product Name'
        />
        <Button
          type='submit'
          className={
            state.productName <= 0
              ? "btn disabled"
              : "btn teal darken-2 z-depth-2"
          }
          text='Submit'
        />
      </form>
    </Collapsible>
  );
};

export default CreateRecipe;
