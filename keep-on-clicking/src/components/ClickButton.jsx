import styles from "./ClickButton.css";

const ClickButton = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src="/assets/images/scary-1-unscreen.gif" alt="Click me!" />
    </button>
  );
};

export default ClickButton;
