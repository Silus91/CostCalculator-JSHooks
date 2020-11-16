import React, { useEffect, useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import M from "materialize-css";
import Collapsible from "./Collapsible";
import ProductTable from "./ProductTable";
import { IngredientContext } from "../contexts/IngredientContex";

const ProductScale = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const { ingredientsList } = useContext(IngredientContext);

  const { productsList } = useContext(ProductContext);

  return (
    <Collapsible title='test' icon='eject'>
      <div className='card-content'>
        {productsList.map((product) => {
          return (
            <ul key={product.id} className='collapsible popout'>
              <ProductTable product={product} />
            </ul>
          );
        })}
      </div>
      <div>
        <form>
          <select>
            {ingredientsList.map((ingredient) => {
              return <option key={ingredient.id}>{ingredient.id}</option>;
            })}
          </select>
        </form>
      </div>
    </Collapsible>
  );
};

export default ProductScale;
