import React, { useState } from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";

const AddTodo = ({ addHandler }) => {
  const [todo, setTodo] = useState({ task: " ", title: " " });

  const changeHandler = (e) => {
    const { name, value } = e.target.value;

    setTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(todo);
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
