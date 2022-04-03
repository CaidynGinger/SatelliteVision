import React from "react";

export const Item = (props) => {
  return (
    <p
      onClick={() =>
        props.onClick(props.name)
      }
    >
      {props.name}
    </p>
  );
};
