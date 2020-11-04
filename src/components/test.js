import React, { useEffect, useState } from "react";
import M from "materialize-css";

const Test = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [state, setState] = useState({
    first: "",
    second: "",
    third: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const test = { first: state.first, second: state.second };
    console.log(test);
  };

  const handlethirdSubmit = (event) => {
    event.preventDefault();
    const third = state.third;
    const ratio1 = state.second / state.first;
    console.log("ratio1", ratio1);
    console.log("drugi", third * ratio1);
  };

  return (
    <div>
      <ul className='collapsible'>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'> add_circle</i>
            test
          </div>
          <div className='collapsible-body card'>
            <form onSubmit={handleSubmit}>
              <div className='input-field col s12'>
                <input
                  type='text'
                  name='first'
                  className='validate'
                  onChange={handleChange}
                />
                <label htmlFor='first'>first</label>
              </div>
              <div className='input-field col s12'>
                <input
                  type='text'
                  name='second'
                  className='validate'
                  onChange={handleChange}
                />
                <label htmlFor='second'>second</label>
              </div>
              <button type='submit' className='btn'>
                Submit
              </button>
            </form>

            <form onSubmit={handlethirdSubmit}>
              <div className='input-field col s12'>
                <input
                  type='text'
                  name='third'
                  className='validate'
                  onChange={handleChange}
                />
                <label htmlFor='third'>third</label>
              </div>
              <button type='submit' className='btn'>
                Submit
              </button>
            </form>
            <div>value </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Test;
