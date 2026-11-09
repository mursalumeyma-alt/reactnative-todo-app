import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: "1", text: "Learn React Native", done: true },
    { id: "2", text: "Build a to-do app", done: false },
  ]);

  const addTodo = (text) => {
    const value = text.trim();
    if (!value) return;

    setTodos((currentTodos) => [
      { id: Date.now().toString(), text: value, done: false },
      ...currentTodos,
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  };

  const clearCompleted = () => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => !todo.done)
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, removeTodo, clearCompleted }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}