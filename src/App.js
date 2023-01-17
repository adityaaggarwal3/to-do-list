import React, { useState } from "react";
import "./App.css";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleInput = (event) => {
    const newItem = event.target.value;
    setInput(newItem);
  };

  const handleToDoItem = () => {
    setItems((prevItems) => {
      return [...prevItems, input];
    });
    setInput("");
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={input} />
        <button onClick={handleToDoItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.length ? (
            items.map((itemToDo, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={itemToDo}
                complete={deleteItem}
              />
            ))
          ) : (
            <li>Add Items</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
