import { useState } from "react";
import PropTypes from "prop-types";
import "./NameEntry.css";

const NameEntry = ({ onNameSubmit }) => {
  const [inputName, setInputName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      onNameSubmit(inputName);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="name-entry">
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

NameEntry.propTypes = {
  onNameSubmit: PropTypes.func.isRequired,
};

export default NameEntry;
