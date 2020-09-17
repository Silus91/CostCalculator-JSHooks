import React, { useEffect, useState } from "react";
import AddComponent from "./AddComponent";
import ComponentList from "./ComponentList";
import NameGiver from "./NameGiver";
import Divider from "./Divider";
import M from "materialize-css";

const CreateRecipe = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [state, setState] = useState({
    productName: "",
  });

  const nameContainer = (productName) => {
    setState({ ...state, productName: productName });
  };

  return (
    <div>
      <ul className='collapsible'>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'> add_circle</i>
            Create Reciple
          </div>
          <div className='collapsible-body card'>
            <NameGiver nameContainer={nameContainer} />
            <div className='divider'></div>
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

//one big form with list and select name for it
