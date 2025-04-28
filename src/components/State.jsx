import React, { useState } from "react";
import Button from "./Button";

// useState(), useEffect()

const State = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ id: 100, name: "Nuth" });
  const [languages, setLanguage] = useState([
    "Khmer",
    "English",
    "Thai",
    "Vietname",
    "Chines",
  ]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const updateData = () => {
    setUser({ ...user, name: "Leang" });
  };

  const updateArray = () => {
    const updatedArray = languages.map((lang) => lang.toUpperCase());
    setLanguage(updatedArray);
    console.log(updatedArray);

    // setLanguage((array) => array.map((lang) => lang.toUpperCase()));
    // console.log(languages)
  };

  return (
    <div>
      <Button text={"Click to Count"} count={count} setCount={setCount} />

      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

      <h1>ID: {user.id}</h1>
      <h1>Name: {user.name}</h1>
      <button onClick={updateData}>Update Data</button>

      <ul>
        {languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
      <button onClick={updateArray}>Update Array</button>
    </div>
  );
};

export default State;
