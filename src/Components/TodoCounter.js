import React from "react";
import "../css/TodoCounter.css";

function TodoCounter({ completed, total }) {
  const whitoutTask = total === 0;
  return (
    <>
      {whitoutTask ? (
        <h2 className="TodoCounter">No hay tareas</h2>
      ) : (
        <h2 className="TodoCounter">
          Has completado {completed} de {total} Tareas
        </h2>
      )}
    </>
  );
}

export { TodoCounter };
