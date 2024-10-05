import styles from "./Scoreboard.css";

const Scoreboard = ({ playerName, score }) => {
  return (
    <div className={styles.scoreboard}>
      <h3 className={styles.title}>Scoreboard</h3>
      <div className={styles.entry}>
        <span className={styles.name}>{playerName || "Player"}</span>
        <span className={styles.score}>{score}</span>
      </div>
    </div>
  );
};

export default Scoreboard;
