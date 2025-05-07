import { useEffect, useState } from "react";
import "./todo.css";

// Main Todo component
const Todo = () => {
  // State to manage the input for new tasks
  const [taskInput, setTaskInput] = useState("");

  // State to manage the list of todos, initialized from localStorage
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  // State to manage the ID of the todo being edited
  const [editId, setEditId] = useState(null);

  // State to manage the value of the input field for editing a todo
  const [updateValue, setUpdateValue] = useState("");

  // Effect to update the `updateValue` when `editId` changes
  useEffect(() => {
    const todo = todos.find((todo) => todo.id == editId);
    setUpdateValue(todo ? todo.title : "");
  }, [editId]);

  // Function to handle adding a new todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() != "") {
      const taskObj = {
        id: Date.now(), // Unique ID for the todo
        title: taskInput,
        completed: false, // Default completed status
      };
      const newTodos = [taskObj, ...todos];
      localStorage.setItem("todo", JSON.stringify(newTodos)); // Save to localStorage
      setTodos(newTodos); // Update state
      setTaskInput(""); // Clear input field
    } else {
      alert("Field is empty"); // Alert if input is empty
    }
  };

  // Function to delete a todo by its ID
  const deleteTodo = (id) => {
    const todosAfterDelete = todos.filter((todo) => todo.id != id);
    localStorage.setItem("todo", JSON.stringify(todosAfterDelete)); // Update localStorage
    setTodos(todosAfterDelete); // Update state
  };

  // Function to toggle the completed status of a todo
  const markComplete = (id) => {
    const todosAfterUpdate = todos.map((todo) =>
      todo.id == id ? { ...todo, completed: !todo.completed } : todo
    );
    localStorage.setItem("todo", JSON.stringify(todosAfterUpdate)); // Update localStorage
    setTodos(todosAfterUpdate); // Update state
  };

  // Function to update the title of a todo
  const updateTitle = (e) => {
    e.preventDefault();
    if (updateValue.trim()) {
      const todosAfterUpdateTitle = todos.map((todo) =>
        todo.id == editId ? { ...todo, title: updateValue.trim() } : todo
      );
      localStorage.setItem("todo", JSON.stringify(todosAfterUpdateTitle)); // Update localStorage
      setTodos(todosAfterUpdateTitle); // Update state
      setEditId(null); // Clear edit mode
    } else {
      alert("Empty Field"); // Alert if input is empty
    }
  };

  return (
    <div className="todo-container">
      {/* Form to add a new todo */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} // Update input state
        />
        <button>Add</button>
      </form>

      {/* Form to edit an existing todo */}
      {editId && (
        <form style={{ marginTop: "10px" }} onSubmit={updateTitle}>
          <input
            type="text"
            value={updateValue}
            onChange={(e) => setUpdateValue(e.target.value)} // Update edit input state
          />
          <button>Update</button>
        </form>
      )}

      {/* List of todos */}
      <ul>
        {todos.length == 0 ? (
          <li>List is empty</li> // Message when no todos exist
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>
              {/* Checkbox to mark todo as complete */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => markComplete(todo.id)} // Toggle completed status
              />
              {/* Display todo title with strikethrough if completed */}
              <span
                style={{ textDecoration: todo.completed && "line-through" }}
              >
                {todo.title}
              </span>
              {/* Buttons for editing and deleting a todo */}
              <div style={{ display: "flex", gap: "7px" }}>
                <button
                  style={{ backgroundColor: "dodgerblue" }}
                  onClick={() => setEditId(todo.id)} // Set edit mode
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
