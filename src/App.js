import React, { useEffect } from "react";
import "./App.css";
import CreateRecipe from "./components/CreateRecipe";
import IngredientContexProvider from "./contexts/IngredientContex";
import ComponentContextProvider from "./contexts/ComponentContext";
import ProductContexProvider from "./contexts/ProductContext";
import AddIngredient from "./components/AddIngredient";
import M from "materialize-css";
import IngredientList from "./components/IngredientList";
import ProductList from "./components/ProductList";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className='container'>
      <IngredientContexProvider>
        <ComponentContextProvider>
          <IngredientList />
          <AddIngredient />
          <CreateRecipe />
          <ProductContexProvider>
            <ProductList />
          </ProductContexProvider>
        </ComponentContextProvider>
      </IngredientContexProvider>
    </div>
  );
}

export default App;
