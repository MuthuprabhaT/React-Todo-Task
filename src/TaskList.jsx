import React, { useState } from "react";
import Task from "./Task";

function TaskList({ todos, onChangeTodo, onDeleteTodo, updateStatus }) {
    
  const [filter, setFilter] = useState("All");

  const filterTodos = () => {
    switch (filter) {
      case "Completed":
        return todos.filter((todo) => todo.status === "Completed");
      case "Not Completed":
        return todos.filter((todo) => todo.status === "Not Completed");
      default:
        return todos;
    }
  };

  return (
    <>
    <div className="container mt-4">
      <div className="input-group">
        <h4>My Todos</h4>

        <div className="ms-auto">
          <label htmlFor="filter">
            <h4>Status Filter : </h4>
          </label>
          <select
            className="mx-2 text-black rounded-2"
            style={{background: "aqua"} }
            value={filter}
            name="filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All" className=" text-black bg-light">
              All
            </option>
            <option
              value="Completed"
              className="complete bg-success text-white"
            >
              Completed
            </option>
            <option value="Not Completed" className="bg-danger text-white">
              Not Completed
            </option>
          </select>
        </div>
      </div>
      </div>

      <div className="container mt-4 d-grid">
        <div className="row row-cols-1 row-cols-md-2 g-4 row-cols-lg-3 ">
          {filterTodos().map((todo) => (
            <div className="col" key={todo.id}>
              <Task
                todo={todo}
                updateStatus={updateStatus}
                onChangeEdit={onChangeTodo}
                onDelete={onDeleteTodo}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );

}

export default TaskList;
