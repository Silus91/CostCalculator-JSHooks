import React, { useEffect, useContext } from "react";
import { IngredientContext } from "../contexts/IngredientContex";
import M from "materialize-css";

const IngredientList = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const { ingredientList } = useContext(IngredientContext);

  return (
    <div>
      <ul className='collapsible'>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'>list</i>
            Ingredient List
          </div>
          <div className='collapsible-body'>
            <div className=''>
              <div className='card-content'>
                <table className='striped'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Weight</th>
                      <th>Price</th>
                      <th>Actions</th>
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
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default IngredientList;
