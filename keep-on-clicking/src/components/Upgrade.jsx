import styles from "./Upgrade.css";

const Upgrade = ({ name, cost, increase, count, onClick, canAfford }) => {
  return (
    <button
      className={`${styles.upgrade} ${
        canAfford ? styles.canAfford : styles.cannotAfford
      }`}
      onClick={onClick}
      disabled={!canAfford}
    >
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.cost}>Cost: {cost}</span>
        <span className={styles.increase}>Damage Increase: {increase}</span>
        <span className={styles.count}>Owned: {count}</span>
      </div>
    </button>
  );
};

export default Upgrade;
