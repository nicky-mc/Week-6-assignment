import { useState } from "react";
import "./NameEntry.css";

export default function NameEntry({ onNameSubmit }) {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onNameSubmit(name);
  };
  return (
    <form className="name-entry" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
