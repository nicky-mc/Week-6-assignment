import styles from "./PlayerNameInput.css";

const PlayerNameInput = ({ playerName, onNameChange }) => {
  return (
    <input
      type="text"
      className={styles.input}
      value={playerName}
      onChange={onNameChange}
      placeholder="Enter your name"
    />
  );
};

export default PlayerNameInput;
