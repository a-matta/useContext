import React, { useReducer } from "react";

const initialState = {
  notes: [
    {
      id: 1,
      title: "Create clean app",
      task: "npx create-react-app",
      done: false,
    },
    {
      id: 2,
      title: "Clean app",
      task: "Delete and clean unnecessary stuff",
      done: false,
    },
    {
      id: 3,
      title: "Create store / context",
      task: "Create new file and use React.createContext()",
      done: false,
    },
  ],
};
export const NotesContext = React.createContext();
const reducer = (state, action) => {
  if (action.type === "ADD_NOTE") {
    console.log("note added");
  } else {
    return state;
  }
};
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToItem = () => {
    dispatch({
      type: "ADD_NOTE",
    });
  };

  const value = {
    notes: state.notes,
    addToItem: addToItem,
  };

  return (
    <NotesContext.Provider value={initialState}>
      {children}
    </NotesContext.Provider>
  );
};
