import { useState, useEffect } from "react";
import upgradesData from "../library/upgrades.json";

const GameState = ({ children }) => {
  // State for total damage
  const [damage, setDamage] = useState(() => {
    const saved = localStorage.getItem("damage");
    return saved ? parseFloat(saved) : 0;
  });

  // State for damage per second
  const [dps, setDps] = useState(() => {
    const saved = localStorage.getItem("dps");
    return saved ? parseFloat(saved) : 0;
  });

  // State for upgrades
  const [upgrades, setUpgrades] = useState(() => {
    const saved = localStorage.getItem("upgrades");
    return saved
      ? JSON.parse(saved)
      : upgradesData.map((upgrade) => ({
          ...upgrade,
          count: 0,
        }));
  });

  // State for player name
  const [playerName, setPlayerName] = useState(() => {
    return localStorage.getItem("playerName") || "";
  });

  // Effect to increment damage based on DPS every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDamage((prevDamage) => prevDamage + dps);
    }, 1000);

    return () => clearInterval(timer);
  }, [dps]);

  // Effect to save game state to localStorage
  useEffect(() => {
    localStorage.setItem("damage", damage.toString());
    localStorage.setItem("dps", dps.toString());
    localStorage.setItem("upgrades", JSON.stringify(upgrades));
    localStorage.setItem("playerName", playerName);
  }, [damage, dps, upgrades, playerName]);

  // Handler for button click
  const handleButtonClick = () => {
    setDamage((prevDamage) => prevDamage + 1);
  };

  // Handler for upgrade purchase
  const handleUpgradeClick = (upgradeId) => {
    const upgrade = upgrades.find((u) => u.id === upgradeId);
    if (damage >= upgrade.cost) {
      setDamage((prevDamage) => prevDamage - upgrade.cost);
      setDps((prevDps) => prevDps + upgrade.increase);
      setUpgrades((prevUpgrades) =>
        prevUpgrades.map((u) =>
          u.id === upgradeId ? { ...u, count: u.count + 1 } : u
        )
      );
    }
  };

  // Handler for player name change
  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  // Handler for game reset
  const resetGame = () => {
    setDamage(0);
    setDps(0);
    setUpgrades(
      upgradesData.map((upgrade) => ({
        ...upgrade,
        count: 0,
      }))
    );
    // Optionally reset player name
    // setPlayerName('');
  };

  // Provide state and handlers to child components
  return children({
    damage,
    dps,
    upgrades,
    playerName,
    onButtonClick: handleButtonClick,
    onUpgradeClick: handleUpgradeClick,
    onNameChange: handleNameChange,
    onReset: resetGame,
  });
};

export default GameState;
