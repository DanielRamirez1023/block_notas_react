import React from "react";
import "../css/Form.css";
function Form({ addTask, setModal }) {
  const [textValue, setText] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(textValue);
    addTask(textValue);
    setModal(false);
    // También estaría bien resetear nuestro formulario
    setText("");
  };

  const ChangeForm = (event) => {
    setText(event.target.value);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva Tarea campeon!!</label>
      <textarea
        value={textValue}
        onChange={ChangeForm}
        placeholder="go go tigrillo.."
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={closeModal}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { Form };
