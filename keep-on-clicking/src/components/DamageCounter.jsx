import styles from "./DamageCounter.css";

const DamageCounter = ({ damage }) => {
  return (
    <div className={styles.counter}>Total Damage: {Math.floor(damage)}</div>
  );
};

export default DamageCounter;
