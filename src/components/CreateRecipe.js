import React, { useEffect } from "react";
import AddComponent from "./AddComponent";
import ComponentList from "./ComponentList";
import Divider from "./Divider";
import M from "materialize-css";

const CreateRecipe = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <ul className='collapsible'>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'> add_circle</i>
            Create Reciple
          </div>
          <div className='collapsible-body card'>
            <AddComponent />
            <div className='divider'></div>
            <ComponentList />
            <div className='divider'></div>
            <Divider />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CreateRecipe;
