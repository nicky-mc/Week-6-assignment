// ThemeToggle.jsx
import "react";
import "./ThemeToggle.css";

const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
  <button className="theme-toggle" onClick={toggleTheme}>
    {isDarkMode ? "☀️" : "🌙"}
  </button>
);

export default ThemeToggle;
