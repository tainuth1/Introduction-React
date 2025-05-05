import { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [taskInput, setTaskInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() != "") {
      const taskObj = {
        id: Date.now(),
        title: taskInput,
        completed: false,
      };
      const newTodos = [taskObj, ...todos];
      setTodos(newTodos);
      setTaskInput("");
    } else {
      alert("Field is empty");
    }
  };

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.length == 0 ? (
          <li>List is empty</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" />
              <span>{todo.title}</span>
              <button>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Todo;
