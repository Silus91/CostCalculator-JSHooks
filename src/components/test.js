import React, { useEffect, useState, useContext } from "react";
import M from "materialize-css";
import Collapsible from "./Collapsible";
import { ProductContext } from "../contexts/ProductContext";

const Test = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const { productList } = useContext(ProductContext);

  const [state, setState] = useState({
    productName: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const renderOptions = () => {
    const products = productList;
    return (
      products &&
      products.length > 0 &&
      products.map((product, index) => {
        return <option key={index}>{product.productName}</option>;
      })
    );
  };

  return (
    <Collapsible icon='add_circle' title='test'>
      <div>
        <select
          name='productName'
          value={state.productName}
          onChange={handleChange}
        >
          {renderOptions()}
        </select>
      </div>
    </Collapsible>
  );
};

export default Test;
