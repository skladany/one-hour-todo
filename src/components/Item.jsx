import React from "react";

const Item = props => {
  let status = props.complete ? "complete" : "";
  console.log("props", props.complete);

  return (
    <li
      className={status}
      onClick={() => {
        return props.updateItem(props.index);
      }}
    >
      {props.item}
    </li>
  );
};

export default Item;
