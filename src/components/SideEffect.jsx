import React, { useEffect, useState } from "react";

const SideEffect = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //   useEffect(() => {});
  //   useEffect(() => {}, []);
  //   useEffect(() => {}, [dependencies]);

  //   useEffect(() => {
  //     console.log("Working");
  //   });

  //   useEffect(() => {
  //     console.log("Working");
  //   }, []);

  useEffect(() => {
    console.log("Working");
  }, [count1]);

  return (
    <div>
      <button onClick={() => setCount1(count1 + 1)}>
        Click to count 1 : {count1}
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        Click to count 2 : {count2}
      </button>
    </div>
  );
};

export default SideEffect;
