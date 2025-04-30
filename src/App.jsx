import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import ConditionalRendering from "./components/ConditionalRendering";
import Input from "./components/Input";
import SideEffect from "./components/SideEffect";
import State from "./components/State";

const App = () => {
  let string = "Click";
  let number = 100;

  const alertMes = (msg) => {
    alert(msg);
  };

  return (
    <>
      {/* <Button text={string} />
      <Button text="Press" />
      <Button text="Touch" />
      <br />
      <Card
        text="Hello"
        number={number}
        array={[10, 20, 30, 40]}
        boolean={true}
        object={{ id: 1001, name: "Heng" }}
        alertMes={alertMes}
        children={<button>Cancel</button>}
      /> */}

      {/* <State /> */}

      {/* <SideEffect /> */}

      {/* <ConditionalRendering /> */}

      <Input />
    </>
  );
};

export default App;
