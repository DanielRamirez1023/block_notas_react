import React from "react";
import "../css/TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <i
        className={`Icon Icon-check  fa-regular fa-square-check  ${
          props.completed && "Icon-check--active"
        }`}
        onClick={props.onComplete}
      ></i>

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <i
        className="Icon Icon-delete fa-regular fa-trash"
        onClick={props.onDelete}
      ></i>
    </li>
  );
}

export { TodoItem };
