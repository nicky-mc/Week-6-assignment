import { useState, useEffect } from "react";
import Upgrade from "./Upgrade.jsx";
import upgradesData from "../Upgrade.json"; // Import upgrade data
import "./Upgrades.css"; // Import CSS for Upgrades

const Upgrades = ({ score, onScoreUpdate, setDps }) => {
  const [upgrades, setUpgrades] = useState([]); // State for storing upgrades

  useEffect(() => {
    // Load upgrades from JSON file when component mounts
    setUpgrades(upgradesData);
  }, []);

  // Function to handle the purchase of upgrades
  const purchaseUpgrade = (id) => {
    setUpgrades((prevUpgrades) =>
      prevUpgrades.map((upgrade) => {
        if (upgrade.id === id && score >= upgrade.cost && !upgrade.purchased) {
          const newDps = upgrade.increase;
          setDps((prevDps) => prevDps + newDps); // Update DPS based on upgrade
          return { ...upgrade, purchased: true }; // Mark the upgrade as purchased
        }
        return upgrade;
      })
    );

    const upgradeCost = upgrades.find((upgrade) => upgrade.id === id).cost; // Get the cost of the upgrade
    onScoreUpdate(score - upgradeCost); // Update the score in the parent component
  };

  return (
    <div className="upgrades">
      {upgrades.map((upgrade) => (
        <Upgrade
          key={upgrade.id}
          upgrade={upgrade}
          purchaseUpgrade={purchaseUpgrade}
          score={score}
        />
      ))}
    </div>
  );
};

export default Upgrades;
