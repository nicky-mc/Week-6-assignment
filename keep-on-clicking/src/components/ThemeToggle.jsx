import styles from "./ThemeToggle.css";

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className={styles.toggle}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
