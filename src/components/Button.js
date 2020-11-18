import React, { Fragment } from "react";

export const Button = (props) => {
  return (
    <Fragment>
      <button type={props.type} className={props.className}>
        {props.text}
      </button>
    </Fragment>
  );
};
