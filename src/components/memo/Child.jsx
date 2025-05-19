import { memo, useState } from "react";

const Child = () => {
  const [count, setCount] = useState(0);
  console.log("Child rendered");
  return (
    <div>
      <h1>Child Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default memo(Child);
