import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <TodoInput refresh={fetchTodos} />
      <TodoList todos={todos} refresh={fetchTodos} />
    </div>
  );
};

export default App;
