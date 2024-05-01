import React, { useCallback, useState } from "react";
import InputComp from "./components/InputComp";
import TodoListing from "./components/TodoListing";

export interface Todo {
  id: number;
  todoItem: string;
  isCompleted: boolean;
}

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        {
          id: Date.now(),
          todoItem: todo,
          isCompleted: false,
        },
        ...todos,
      ]);

      setTodo("");
    }
  };

  const handleDelete = (id: number) => {
    const updatedTodoList = todos.filter((todo) => todo.id !== id && todo);
    setTodos(updatedTodoList);
  };

  const handleComplete = (id: number) => {
    const updatedTodoList = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodoList);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <InputComp todo={todo} setTodo={setTodo} handleClick={handleClick} />

      <TodoListing
        todos={todos}
        setTodos={setTodos}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default App;
