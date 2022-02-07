import React, { useState, useContext } from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";
import { NotesContext } from "../store/todoStore";

const AddTodo = () => {
  const [todo, setTodo] = useState({ task: " ", title: " " });
  const context = useContext(NotesContext);
  const changeHandler = (e) => {
    const { name, value } = e.target.value;

    setTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(todo);
  };

  const addHandler = (e) => {
    e.preventDefault();
    context.addTodoItem();
  };
  return (
    <form onSubmit={addHandler} className={classes.input}>
      <div>
        <label htmlFor="title">Title</label>
        <input name="title" type="text" onChange={changeHandler} />
      </div>
      <div>
        <label htmlFor="task">Task</label>
        <input name="task" type="text" onChange={changeHandler} />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default AddTodo;
