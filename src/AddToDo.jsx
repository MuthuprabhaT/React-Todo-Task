import React from 'react'
import { useState } from 'react'

function AddToDo({onAddTodo}) {

    const [todoName,setTodoname]=useState('');

    const [description,setDescription]=useState('');

  return (
    <>
    <nav className="container mt-5">
        <h1 className="text-center">My ToDo</h1>
    </nav>
    <div className='container'>
        <div className="row d-flex justify-content-center mt-5 ms-5">
            <div className="col-sm-12 col-lg-4">
                <div className="input-group">
                <input className="form-control my-3" type="text"
                placeholder='ToDo Name'
                value={todoName}
                onChange={e => {
                    setTodoname(e.target.value)
                }} />
                </div>
            </div>
            <div className="col-sm-12 col-lg-4">
                <div className="input-group">
                <input type="text"
                className='form-control my-3'
                placeholder='ToDo Description'
                value={description}
                onChange={e => {
                    setDescription(e.target.value)
                }} />
                </div>
            </div>
            <div className="col-sm-12 col-lg-4">
            <button className='btn btn-primary my-3 px-5' onClick={() => {
                console.log(todoName,description);
            onAddTodo(todoName,description)
             setTodoname('');
             setDescription('');
            }}>Add Task</button>
            </div>
        </div>       
    </div>
    </>
  )
}

export default AddToDo