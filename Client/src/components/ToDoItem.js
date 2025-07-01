import React from "react";
import axios from "axios";

const TodoItem = ({ todo, refresh }) => {
  const toggleComplete = async () => {
    await axios.put(`http://localhost:5000/api/todos/${todo._id}`, { ...todo, completed: !todo.completed });
    refresh();
  };

  const deleteTodo = async () => {
    await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
    refresh();
  };

  return (
    <li className="flex justify-between items-center border p-2 rounded">
      <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.text}</span>
      <div className="flex gap-2">
        <button onClick={toggleComplete} className="text-green-600">✔</button>
        <button onClick={deleteTodo} className="text-red-600">🗑️</button>
      </div>
    </li>
  );
};

export default TodoItem;
