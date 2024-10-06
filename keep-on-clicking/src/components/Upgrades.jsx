import { useState } from "react";
import PropTypes from "prop-types";
import Upgrade from "./Upgrade";
import upgradesData from "../Upgrades.json";
import "./Upgrades.css";

const Upgrades = ({ totalDamage, onUpgrade }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleUpgrade = (upgrade) => {
    if (totalDamage >= upgrade.cost) {
      onUpgrade(upgrade.increase, upgrade.cost);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`upgrades ${isExpanded ? "expanded" : "collapsed"}`}>
      <button onClick={toggleExpand} className="toggle-button">
        {isExpanded ? "Hide Upgrades" : "Show Upgrades"}
      </button>
      {isExpanded && (
        <div className="upgrades-grid">
          {upgradesData.map((upgrade) => (
            <Upgrade
              key={upgrade.id}
              upgrade={upgrade}
              onUpgrade={() => handleUpgrade(upgrade)}
              canAfford={totalDamage >= upgrade.cost}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Upgrades.propTypes = {
  totalDamage: PropTypes.number.isRequired,
  onUpgrade: PropTypes.func.isRequired,
};

export default Upgrades;
