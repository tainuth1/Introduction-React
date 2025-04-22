import "./../styles/Button.css";

const Button = () => {
  return (
    <button
      className="btn"
      // style={{ backgroundColor: "red", color: "white" }}
      onClick={() => alert("Hello")}
    >
      Click Button
    </button>
  );
};

export default Button;

// rafce
