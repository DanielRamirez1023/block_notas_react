import React from "react";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoButton } from "./Components/TodoButton";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { Modal } from "./Components/modal";
import { Form } from "./Components/Form";
import { Loading } from "./Components/loading";
// import './App.css';

// const defaultTasks = [
//   { text: "Estudiar React", completed: false },
//   { text: "Estudiar IO", completed: false },
//   { text: "Cambiar de lentes", completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        // access the localStorage in my browser
        const localStorageTasks = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageTasks) {
          // Si no existe un item en localStorage,
          //  por lo tanto guardamos uno con un array vacío.
          // se convierte el array vacio en texto ya que local storage solo permite texto
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItem = initialValue;
        } else {
          // si hay valores los obtenemos y guardamos en parseditem
          parsedItem = JSON.parse(localStorageTasks);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newTasks) => {
    try {
      const stringifyTask = JSON.stringify(newTasks);
      localStorage.setItem("tasks", stringifyTask);
      setItem(newTasks);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  // manejo de estaodos para las tareas
  // task es el valor setTask metodo para modfiicar

  const {
    item: tasks,
    saveItem: saveTask,
    loading,
    error,
  } = useLocalStorage("tasks", []);
  // estado para el manejo de nuestro modal
  const [openModal, setModal] = React.useState(false);

  const [Check, setCheck] = React.useState(false);
  // manejo de estados para el search
  const [searchValue, setSearchValue] = React.useState("");

  const TasksCompleted = tasks.filter((element) => !!element.completed).length;
  const totalTasks = tasks.length;

  let searchTasks = [];

  // se muestran todas las tareas cuando no se escribe nada
  if (searchValue.length < 1) {
    searchTasks = tasks;
  } else {
    // se va a guardar en searchTasks las tareas que incluyan lo ingresan en search
    searchTasks = tasks.filter((element) => {
      const taskText = element.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return taskText.includes(searchText);
    });
  }

  function addTask(textValue) {
    const UpdateTasks = [...tasks];

    UpdateTasks.push({
      completed: false,
      text: textValue,
    });
    saveTask(UpdateTasks);
  }

  let prueba = new Array(3);
  function completeTask(text) {
    const taskIndex = tasks.findIndex((task) => task.text === text);

    const UpdateTasks = [...tasks];

    setCheck(!Check);

    UpdateTasks[taskIndex].completed = Check;

    saveTask(UpdateTasks);
  }

  function deleteTask(text) {
    const taskIndex = tasks.findIndex((task) => task.text === text);

    const UpdateTasks = [...tasks];

    UpdateTasks.splice(taskIndex, 1);

    saveTask(UpdateTasks);
  }

  return (
    <>
      <TodoCounter completed={TasksCompleted} total={totalTasks} />
      <TodoSearch searchValue={searchValue} setSearch={setSearchValue} />
      <TodoList>
        {error && <p>pailas....</p>}
        {loading && prueba.fill(1).map((a, i) => <Loading key={i} />)}

        {searchTasks.map((task) => (
          <TodoItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <Form key={openModal} addTask={addTask} setModal={setModal} />
        </Modal>
      )}
      <TodoButton setModal={setModal} openModal={openModal} />
    </>
  );
}

export default App;
