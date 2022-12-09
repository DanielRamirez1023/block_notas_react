import React from "react";
import "../css/TodoButton.css";

function TodoButton({ setModal, openModal }) {
  function OnClickButton() {
    setModal(!openModal);
  }
  return (
    <button className="CreateTodoButton" onClick={() => OnClickButton()}>
      +
    </button>
  );
}

export { TodoButton };
