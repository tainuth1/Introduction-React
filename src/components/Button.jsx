import "./../styles/Button.css";

//properties
//reusable
const Button = (props) => {
  return (
    <button className="btn">
      {props.text} {count}
    </button>
  );
};

export default Button;

// rafce
