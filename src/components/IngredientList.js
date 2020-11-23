import React, { useEffect, useContext } from "react";
import { IngredientContext } from "../contexts/IngredientContext";
import { INGREDIENT_DELETE } from "../types/types";
import M from "materialize-css";
import Collapsible from "./Collapsible";
import AddEditIngredient from "./AddEditIngredient";

const IngredientList = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const deleteIngredient = (id) => {
    return dispatch({
      type: INGREDIENT_DELETE,
      payload: id,
    });
  };

  const { ingredientsList, dispatch } = useContext(IngredientContext);

  const tableTitle = ["Name", "Weight", "Price", "Actions"];
  console.log(ingredientsList);
  return (
    <Collapsible title='Ingredien List' icon='list'>
      <div className='card-content'>
        <AddEditIngredient id='#id' />
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
                      className='btn red darken-1'
                      onClick={() => deleteIngredient(ingredient.id)}
                    >
                      Delete
                    </button>

                    <AddEditIngredient
                      id={ingredient.id}
                      ingredient={ingredient}
                    />
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
