import "react";
import "./Button.css";

const Button = ({ onClick }) => (
  <button className="click-button" onClick={onClick}>
    <img src="/assets/images/click-button.gif" alt="Click Me!" />
  </button>
);

export default Button;
