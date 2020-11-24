import React, { useEffect, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import M from "materialize-css";
import Collapsible from "./Collapsible";
import ProductTable from "./ProductTable";
import { PRODUCT_DELETE } from "../types/types";

const ProductScale = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  //   <button
  //   onClick={() =>
  //     dispatch({
  //       type: PRODUCT_DELETE,
  //       payload: product.id,
  //     })
  //   }
  // >
  //   <i className='material-icons'>delete_forever</i>
  // </button>

  const { productsList, dispatch } = useContext(ProductContext);

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
