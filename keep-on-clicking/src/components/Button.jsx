// Button.jsx
import "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onClick }) => (
  <div className="button-container">
    <button className="click-button" onClick={onClick}>
      <img src="/assets/images/Monster.gif" alt="Monster" />
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
