import React, { useState, useRef } from "react";
import Item from "./components/Item.jsx";

const App = () => {
  const [items, addItem] = React.useState([]);
  const itemRef = useRef(null);

  const onSubmit = event => {
    event.preventDefault();

    // // Grab value
    const item = itemRef.current.value;

    // Push item onto state
    addItem([
      ...items,
      {
        item,
        complete: false
      }
    ]);

    event.currentTarget.reset();
  };

  const updateItem = index => {
    console.log(index);

    // flip the status
    items[index].complete = !items[index].complete;

    console.log(items);

    // Update state
    // addItem(items); doesn't work b/c React won't re-render.
    // Use the spread operator forces React to see the updated state
    addItem([...items]);
  };

  console.log(items);

  return (
    <div className="App">
      <h1>One Hour Todo</h1>

      <h4>Add Todo Item</h4>
      <form onSubmit={onSubmit}>
        <input type="text" ref={itemRef} />
        <input type="submit" />
      </form>

      <ol>
        {Object.keys(items).map(key => (
          <Item
            complete={items[key].complete}
            key={key}
            index={key}
            item={items[key].item}
            updateItem={updateItem}
          />
        ))}
      </ol>
    </div>
  );
};

export default App;
