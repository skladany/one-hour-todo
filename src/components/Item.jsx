import React from "react";

class Item extends React.Component {
  render() {
    let status = this.props.complete ? "complete" : "";

    return (
      <li
        className={status}
        onClick={() => {
          return this.props.updateItem(this.props.index);
        }}
      >
        {this.props.item}
      </li>
    );
  }
}

export default Item;
