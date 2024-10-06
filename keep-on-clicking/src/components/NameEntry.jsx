import { useState } from "react";
import "./NameEntry.css";

const NameEntry = ({ onSaveName }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSaveName(name);
      setName("");
    }
  };

  return (
    <form className="name-entry" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="name-input"
      />
      <button type="submit" className="save-button">
        Save Name
      </button>
    </form>
  );
};

export default NameEntry;
