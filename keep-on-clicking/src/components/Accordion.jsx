import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button className="accordion-toggle" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};
export default Accordion;
