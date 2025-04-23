const Card = ({ children, text, number, array, boolean, object, alertMes }) => {
  // const { text, number, array, boolean, object } = props;
  return (
    <div style={{ border: "1px solid", display: "inline-block" }}>
      <h2>text : {text}</h2>
      <h2>number : {number}</h2>
      <h2>array : {array}</h2>
      <h2>
        object : {object.id}, {object.name}
      </h2>
      <h2>boolean : {boolean}</h2>
      {children}
      <button onClick={() => alertMes("Hello")}>Click</button>
    </div>
  );
};

export default Card;
