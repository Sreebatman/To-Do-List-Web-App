import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, refresh }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} refresh={refresh} />
      ))}
    </ul>
  );
};

export default TodoList;
