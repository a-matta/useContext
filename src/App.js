import React from "react";
import { Provider } from "./components/store/todoStore";
import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";

const App = () => {
  return (
    <Provider>
      <AddTodo />
      <TodoList />
    </Provider>
  );
};

export default App;
