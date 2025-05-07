import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Test = () => {
  const { number, name, test } = useContext(DataContext);
  return (
    <div>
      <h1>NUmber: {number}</h1>
      <h1>Name: {name}</h1>
    </div>
  );
};

export default Test;
