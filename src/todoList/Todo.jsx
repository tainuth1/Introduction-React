import { useEffect, useState } from "react";
import "./todo.css";

const Todo = () => {
  const [taskInput, setTaskInput] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [editId, setEditId] = useState(null);
  const [updateValue, setUpdateValue] = useState("");

  // useEffect(() => {
  //   setTodos(JSON.parse(localStorage.getItem("todo")));
  // }, []);

  useEffect(() => {
    const todo = todos.find((todo) => todo.id == editId);
    setUpdateValue(todo ? todo.title : "");
  }, [editId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() != "") {
      const taskObj = {
        id: Date.now(),
        title: taskInput,
        completed: false,
      };
      const newTodos = [taskObj, ...todos];
      localStorage.setItem("todo", JSON.stringify(newTodos));
      setTodos(newTodos);
      setTaskInput("");
    } else {
      alert("Field is empty");
    }
  };

  const deleteTodo = (id) => {
    const todosAfterDelete = todos.filter((todo) => todo.id != id);
    localStorage.setItem("todo", JSON.stringify(todosAfterDelete));
    setTodos(todosAfterDelete);
  };

  const markComplete = (id) => {
    const todosAfterUpdate = todos.map((todo) =>
      todo.id == id ? { ...todo, completed: !todo.completed } : todo
    );
    localStorage.setItem("todo", JSON.stringify(todosAfterUpdate));
    setTodos(todosAfterUpdate);
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
      {editId && (
        <form style={{ marginTop: "10px" }}>
          <input
            type="text"
            value={updateValue}
            onChange={(e) => setUpdateValue(e.target.value)}
          />
          <button>Update</button>
        </form>
      )}
      <ul>
        {todos.length == 0 ? (
          <li>List is empty</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => markComplete(todo.id)}
              />
              <span
                style={{ textDecoration: todo.completed && "line-through" }}
              >
                {todo.title}
              </span>
              <div style={{ display: "flex", gap: "7px" }}>
                <button
                  style={{ backgroundColor: "dodgerblue" }}
                  onClick={() => setEditId(todo.id)}
                >
                  Edit
                </button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Todo;
