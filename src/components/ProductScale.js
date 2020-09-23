import React, { useEffect, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import M from "materialize-css";

const ProductScale = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const { productList } = useContext(ProductContext);

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <ul className='collapsible'>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'>eject</i>
            Product Scale
          </div>
          <div className='collapsible-body'>
            <div className=''>
              <div className='card-content'>
                <ul className='collapsible popout'>
                  {productList.map((product) => {
                    return (
                      <li key={product.id}>
                        <div className='collapsible-header'>
                          {product.productName}
                        </div>
                        <div className='collapsible-body'>
                          <div className=''>
                            <h3>{product.productName}</h3>
                            <table className='striped'>
                              <thead>
                                <tr>
                                  <td>Name</td>
                                  <td>Weight</td>
                                  <td>New weight</td>
                                </tr>
                              </thead>
                              <tbody>
                                {product.componentList.map((component) => {
                                  return (
                                    <tr key={component.id}>
                                      <td>{component.ingredientName}</td>
                                      <td>{component.componentWeight}</td>
                                      <td>
                                        <form>
                                          <input
                                            type='number'
                                            value={component.componentWeight}
                                            onChange={handleChange}
                                          />
                                        </form>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductScale;
