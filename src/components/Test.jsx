import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Test = () => {
  const {
    number,
    name,
    userData: { id, username },
    setNumber,
    alertMsg
  } = useContext(DataContext);
  
  return (
    <div>
      <h1>NUmber: {number}</h1>
      <h1>Name: {name}</h1>
      <button onClick={() => setNumber(number + 10)}>Click</button>
    </div>
  );
};

export default Test;
