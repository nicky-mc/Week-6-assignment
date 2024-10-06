import "react";
import PropTypes from "prop-types";
import "./Upgrade.css";

const Upgrade = ({ upgrade, onUpgrade, canAfford }) => {
  return (
    <div className={`upgrade ${canAfford ? "can-afford" : ""}`}>
      <img src={upgrade.image} alt={upgrade.name} className="upgrade-image" />
      <h3>{upgrade.name}</h3>
      <p>Cost: {upgrade.cost}</p>
      <p>DPS Increase: {upgrade.increase}</p>
      <button onClick={onUpgrade} disabled={!canAfford}>
        Buy
      </button>
    </div>
  );
};

Upgrade.propTypes = {
  upgrade: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    increase: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onUpgrade: PropTypes.func.isRequired,
  canAfford: PropTypes.bool.isRequired,
};

export default Upgrade;
