import React, { useContext } from "react";
import { notes } from "../../notes";
import { NotesContext } from "../store/todoStore";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const context = useContext(NotesContext);
  const removeHandler = (id) => {
    context.removeTodo(id);
  };
  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      {context.notes.map((note) => {
        return (
          <div
            className={`${classes.todo} ${
              note.done ? classes.done : classes.notDone
            }`}
            key={note.id}
            onClick={() => context.doneTodo(note.id)}
          >
            <h2>
              {note.id}.{note.title}
            </h2>
            <p>{note.task}</p>
            <span
              className={`material-icons ${classes.delete}`}
              onClick={() => removeHandler(note.id)}
            >
              delete
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
