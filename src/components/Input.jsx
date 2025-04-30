import React, { useState } from "react";

const Input = () => {
  const [userInput, setUserInput] = useState("");

  //   const handleInput = (e) => {
  //     setUserInput(e.target.value)
  //   };

  const checkData = () => {
    console.log(userInput);
    setUserInput("");
  };

  return (
    <div>
      <h1>{userInput}</h1>

      <input type="text" onChange={handleInput} />

      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={checkData}>Submit</button>
    </div>
  );
};

export default Input;
