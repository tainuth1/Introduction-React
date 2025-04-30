import React from "react";
import State from "./State";

// ? :
// &&

const ConditionalRendering = () => {
  let isLogin = true;
  let a = null
  let e = undefined
  return ( 
    <div>
      {isLogin ? <h1>Welcome</h1> : <h1>Login</h1>}
      {isLogin ? <h1>Welcome</h1> : 10 < 5 ? <h1>Login</h1> : <h1>Hello</h1>}

      {isLogin && <h1>Logged IN</h1>}

      {isLogin && <State />}
    </div>
  );
};

export default ConditionalRendering;
