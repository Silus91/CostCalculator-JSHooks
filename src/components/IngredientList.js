import React, { useEffect, useContext } from "react";
import { IngredientContext } from "../contexts/IngredientContext";
import { INGREDIENT_DELETE } from "../types/types";
import AddIngredient from "./AddIngredient";
import M from "materialize-css";
import Collapsible from "./Collapsible";
import EditIngredient from "./EditIngredient";

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
                    <button onClick={() => deleteIngredient(ingredient.id)}>
                      Delete
                    </button>
                    <EditIngredient ingredient={ingredient} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <EditIngredient /> */}
      </div>
    </Collapsible>
  );
};

export default IngredientList;
