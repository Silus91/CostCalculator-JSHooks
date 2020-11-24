import React, { useEffect, useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import M from "materialize-css";
import Collapsible from "./Collapsible";
import ProductTable from "./ProductTable";

const ProductScale = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const { productsList } = useContext(ProductContext);

  return (
    <Collapsible title='Product Scale' icon='eject'>
      <div className='card-content'>
        <ul className='collapsible popout'>
          {productsList.map((product) => {
            return <ProductTable key={product.id} product={product} />;
          })}
        </ul>
      </div>
    </Collapsible>
  );
};

export default ProductScale;
