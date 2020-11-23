import React from "react";

export const Button = (props) => {
  return (
    <button
      type={props.type}
      onCLick={props.onCLick}
      className={props.className}
    >
      {props.text}
    </button>
  );
};
