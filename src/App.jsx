import React from "react";
import Item from "./components/Item.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  itemRef = React.createRef();

  addItem = event => {
    event.preventDefault();

    // Grab value
    const item = this.itemRef.current.value;

    // Copy the state
    const items = [...this.state.items];

    // Push item onto state
    items.push({
      item,
      complete: false
    });

    // // Update state
    this.setState({ items });

    // Clear out the form
    event.currentTarget.reset();
  };

  updateItem = index => {
    // Copy the state
    const items = [...this.state.items];

    // flip the status
    items[index].complete = !items[index].complete;

    // Update state
    this.setState({ items });
  };

  render() {
    return (
      <div className="App">
        <h1>One Hour Todo</h1>

        <h2>Add Todo Item</h2>
        <form onSubmit={this.addItem}>
          <input type="text" ref={this.itemRef} />
          <input type="submit" />
        </form>

        {Object.keys(this.state.items).map(key => (
          <Item
            complete={this.state.items[key].complete}
            key={key}
            index={key}
            item={this.state.items[key].item}
            updateItem={this.updateItem}
          />
        ))}
      </div>
    );
  }
}

export default App;
