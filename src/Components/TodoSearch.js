import React from "react";
import "../css/TodoSearch.css";

function TodoSearch({ search, setSearch }) {
  const ChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  return [
    <input
      placeholder="Busca tus tareas"
      className="TodoSearch"
      onChange={ChangeSearch}
      value={search}
    />,
  ];
}

export { TodoSearch };
