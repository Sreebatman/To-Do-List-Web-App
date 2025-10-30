import React, { useState } from "react";
import axios from "axios";

const TodoInput = ({ refresh }) => {
  const [text, setText] = useState("");

  const addTodo = async () => {
    if (text.trim()) {
      await axios.post("http://localhost:5000/api/todos", { text, completed: false });
      setText("");
      refresh();
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border rounded px-2 py-1"
        placeholder="Add new task"
      />
      <button onClick={addTodo} className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
    </div>
  );
};

export default TodoInput;
