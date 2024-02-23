import React from 'react'
import { useState } from 'react'

function Task({ todo, onChangeEdit, onDelete, updateStatus }) {
 
  const [isEditing, setIsEditing] = useState(false);
  
  let todoContent;

if (isEditing) {
    todoContent = (
      <>
        <div className="container d-flex justify-content-center align-items-center ">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div key={todo.id} className="col">
              <div
                class="card h-100 rounded-4 border-0"
                style={{
                  width: "20rem",
                  background: "radial-gradient(white,#ffd89b)",
                }}
              >
                <div class="card-body m-2">
                  <p class=" card-text text-black fw-bold">
                    <span id="name">Name:</span>
                    <input
                      type="text"
                      className="form-control"
                      value={todo.todoName}
                      onChange={(e) => {
                        onChangeEdit({
                          ...todo,
                          todoName: e.target.value,
                        });
                      }}
                    />
                  </p>

                  <p className="fw-bold">
                    <span id="description">Description :</span>
                    <input
                      type="text"
                      className="form-control"
                      value={todo.description}
                      onChange={(e) => {
                        onChangeEdit({
                          ...todo,
                          description: e.target.value,
                        });
                      }}
                    />
                  </p>

                  <div className="mb-2">
                    <label htmlFor="status" className="me-1">
                      <b id="status">Status:</b>{" "}
                    </label>{" "}
                    <select
                      className={
                        todo.status === "Completed"
                          ? "bg-success text-white "
                          : " text-white "
                      }
                      style={{
                        borderRadius: "5px",
                        border: "none",
                        background: "rgb(255, 125, 144)",
                      }}
                      value={todo.status}
                      name="status"
                      onChange={(e) => updateStatus(todo.id, e.target.value)}
                    >
                      <option
                        value="Completed"
                        className={
                          todo.status === "Completed" ? "bg-success" : ""
                        }
                      >
                        Completed
                      </option>
                      <option
                        value="Not Completed"
                        className={
                          todo.status !== "Completed"
                            ? "bg-danger text-white"
                            : ""
                        }
                      >
                        Not Completed
                      </option>
                    </select>
                  </div>

                  <div className="float-end m-3  p-2">
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => setIsEditing(false)}
                      type="button"
                    >
                      save
                    </button>
                    <button
                      className="btn btn-danger "
                      onClick={() => onDelete(todo.id)}
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    todoContent = (
      <>
      <div className="container d-flex justify-content-center align-items-center ">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div key={todo.id} className="col">
            <div
              class="card h-100 rounded-4 border-0"
              style={{ width: "20rem",background:"radial-gradient(white,#ffd89b)"
            }}
            >
              <div class="card-body m-2">
                <p class=" card-text text-black fw-bold"><span id="name">Name:</span> {todo.todoName} </p>

                <p className="fw-bold">
                  <span id="description">Description :</span> {todo.description}</p>

                <div className="mb-2">
                  {" "}
                  <label htmlFor="status" className="me-1">    
                    <b id="status">Status:</b>{" "}
                  </label>{" "}
                  <select
                    className={
                      todo.status === "Completed"
                        ? "bg-success text-white "
                        : " text-white "
                    } style={{borderRadius:"5px",border:"none",background:"rgb(255, 125, 144)"}}
                    value={todo.status}
                    name="status"
                    onChange={(e) => updateStatus(todo.id, e.target.value)}
                  >
                    <option
                      value="Completed"
                      className= { 
                        todo.status === "Completed" ? "bg-success" : ""
                      }
                    >
                      Completed
                    </option>
                    <option
                      value="Not Completed"
                      className={
                        todo.status !== "Completed"
                          ? "bg-danger text-white"
                          : ""
                      }
                    >
                      Not Completed
                    </option>
                  </select>
                </div>

                <div className="float-end m-3  p-2">
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => setIsEditing(true)}
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger "
                    onClick={() => onDelete(todo.id)}
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }

  return (
    <div>
      {todoContent}
    </div>
  )
}

export default Task