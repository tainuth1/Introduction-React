import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import ConditionalRendering from "./components/ConditionalRendering";
import FormData from "./components/FormData";
import Input from "./components/Input";
import SideEffect from "./components/SideEffect";
import State from "./components/State";
import Test from "./components/Test";
import Todo from "./todoList/Todo";

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
      <br /> */}
      {/* <Card
        text="Hello"
        number={number}
        array={[10, 20, 30, 40]}
        boolean={true}
        object={{ id: 1001, name: "Heng" }}
        alertMes={alertMes}
        // child={<button>Cancel</button>}
      >
        <button>Hello</button>
      </Card> */}

      {/* <State /> */}

      {/* <SideEffect /> */}

      {/* <ConditionalRendering /> */}

      {/* <Input /> */}

      {/* <FormData /> */}

      {/* <Todo /> */}

      <Test />
    </>
  );
};

export default App;
