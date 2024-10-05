import styles from "./ResetButton.css";

const ResetButton = ({ onReset }) => {
  const handleClick = () => {
    if (
      window.confirm(
        "Are you sure you want to reset the game? All progress will be lost."
      )
    ) {
      onReset();
    }
  };

  return (
    <button className={styles.resetButton} onClick={handleClick}>
      Reset Game
    </button>
  );
};

export default ResetButton;
