import "./../styles/Button.css";

const Button = ({ text, count, setCount }) => {
  return (
    <button className="btn" onClick={() => setCount(count + 5)}>
      {text} : {count}
    </button>
  );
};

export default Button;
