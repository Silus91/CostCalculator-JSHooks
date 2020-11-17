import React, { useEffect } from "react";
import "./App.css";
import CreateRecipe from "./components/CreateRecipe";
import IngredientContextProvider from "./contexts/IngredientContext";
import ProductContexProvider from "./contexts/ProductContext";
import M from "materialize-css";
import IngredientList from "./components/IngredientList";
import ProductList from "./components/ProductList";
import ProductScale from "./components/ProductScale";
import Test from "./components/test";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className='container'>
      <IngredientContextProvider>
        <ProductContexProvider>
          <IngredientList />
          <CreateRecipe />
          <ProductList />
          <ProductScale />
          <Test />
        </ProductContexProvider>
      </IngredientContextProvider>
    </div>
  );
}

export default App;
