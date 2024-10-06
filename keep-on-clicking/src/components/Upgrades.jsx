import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Upgrade from "./Upgrade";
import upgradesData from "../Upgrades.json";
import "./Upgrades.css";

const Upgrades = ({ score, onScoreUpdate, setDps }) => {
  const [upgrades, setUpgrades] = useState(
    upgradesData.map((upgrade) => ({ ...upgrade, count: 0 }))
  );
  const [isExpanded, setIsExpanded] = useState(false);

  const calculateTotalDps = useCallback(() => {
    return upgrades.reduce(
      (total, upgrade) => total + upgrade.increase * upgrade.count,
      0
    );
  }, [upgrades]);

  useEffect(() => {
    setDps(calculateTotalDps());
  }, [upgrades, setDps, calculateTotalDps]);

  const handleUpgrade = useCallback(
    (upgradeId) => {
      setUpgrades((prevUpgrades) =>
        prevUpgrades.map((upgrade) =>
          upgrade.id === upgradeId
            ? {
                ...upgrade,
                count: upgrade.count + 1,
                cost: Math.ceil(upgrade.cost * 1.15),
              }
            : upgrade
        )
      );
      const upgradeCost = upgrades.find((u) => u.id === upgradeId).cost;
      onScoreUpdate(score - upgradeCost);
    },
    [score, onScoreUpdate, upgrades]
  );

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
          {upgrades.map((upgrade) => (
            <Upgrade
              key={upgrade.id}
              upgrade={upgrade}
              onUpgrade={handleUpgrade}
              canAfford={score >= upgrade.cost}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Upgrades.propTypes = {
  score: PropTypes.number.isRequired,
  onScoreUpdate: PropTypes.func.isRequired,
  setDps: PropTypes.func.isRequired,
};

export default Upgrades;
