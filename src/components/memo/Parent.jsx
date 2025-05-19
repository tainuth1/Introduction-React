import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log("Parent rendered");
  return (
    <div>
      <h1>Parent Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child />
    </div>
  );
};

export default Parent;
