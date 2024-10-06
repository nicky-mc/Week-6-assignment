import "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onClick }) => (
  <button className="click-button" onClick={onClick}>
    <img src="/assets/images/Monster.gif" alt="Monster" />
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
