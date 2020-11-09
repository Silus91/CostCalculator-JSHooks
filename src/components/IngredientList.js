import React, { useEffect, useContext } from "react";
import { IngredientContext } from "../contexts/IngredientContex";
import M from "materialize-css";
import Collapsible from "./Collapsible";

const IngredientList = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const { ingredientList } = useContext(IngredientContext);
  const tableTitle = ["Name", "Weight", "Price", "Actions"];

  return (
    <Collapsible title='Ingredien List' icon='list'>
      <div className='card-content'>
        <table className='striped'>
          <thead>
            <tr>
              {tableTitle.map((title) => {
                return <td key={title}>{title}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {ingredientList.map((ingredient) => {
              return (
                <tr key={ingredient.id}>
                  <td> {ingredient.ingredientName}</td>
                  <td>{ingredient.ingredientWeight}</td>
                  <td>{ingredient.ingredientCost}</td>
                  <td>todo</td>
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
