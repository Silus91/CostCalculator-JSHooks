import React, { useEffect, useContext } from "react";
import { IngredientContext } from "../contexts/IngredientContex";
import { INGREDIENT_DELETE } from "../types/types";
import AddIngredient from "./AddIngredient";

import M from "materialize-css";
import Collapsible from "./Collapsible";

const IngredientList = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const { ingredientsList, dispatch } = useContext(IngredientContext);
  const tableTitle = ["Name", "Weight", "Price", "Actions"];
  console.log();
  return (
    <Collapsible title='Ingredien List' icon='list'>
      <div className='card-content'>
        <AddIngredient />
        <table className='striped'>
          <thead>
            <tr>
              {tableTitle.map((title) => {
                return <td key={title}>{title}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {ingredientsList.map((ingredient) => {
              return (
                <tr key={ingredient.id}>
                  <td> {ingredient.ingredientName}</td>
                  <td>{ingredient.ingredientWeight}</td>
                  <td>{ingredient.ingredientCost}</td>
                  <td>
                    <button
                      onClick={() =>
                        dispatch({ type: INGREDIENT_DELETE, id: ingredient.id })
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Collapsible>
  );
};

export default IngredientList;
//44
