import React, { useContext } from "react";

import { notes } from "../../notes";
import { NotesContext } from "../store/todoStore";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const context = useContext(NotesContext);
  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      {context.notes.map((note) => {
        return (
          <div key={note.id} className={classes.todo}>
            <h2>
              {note.id}. {note.title}
            </h2>
            <p>{note.task}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
