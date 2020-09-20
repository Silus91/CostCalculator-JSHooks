import React, { useEffect } from "react";
import "./App.css";
import CreateRecipe from "./components/CreateRecipe";
import IngredientContexProvider from "./contexts/IngredientContex";
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
        <ProductContexProvider>
          <IngredientList />
          <AddIngredient />
          <CreateRecipe />
          <ProductList />
        </ProductContexProvider>
      </IngredientContexProvider>
    </div>
  );
}

export default App;
