import React, { useEffect } from "react";
import "./App.css";
import CreateRecipe from "./components/CreateRecipe";
import IngredientContexProvider from "./contexts/IngredientContex";
import IngContextProvider from "./contexts/ingContext";
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
      <IngContextProvider>
        <IngredientContexProvider>
          <ProductContexProvider>
            <IngredientList />
            <CreateRecipe />
            <ProductList />
            <ProductScale />
            <Test />
          </ProductContexProvider>
        </IngredientContexProvider>
      </IngContextProvider>
    </div>
  );
}

export default App;
