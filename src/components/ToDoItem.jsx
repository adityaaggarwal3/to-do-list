import React from "react";

const ToDoItem = (props) => {
  const handleStrike = () => {
    setTimeout(props.complete(props.id), 3000);
  };

  return (
    <>
      <li onClick={handleStrike}>{props.text}</li>
    </>
  );
};

export default ToDoItem;
