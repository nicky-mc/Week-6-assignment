import { useState } from "react";
import ClickButton from "./components/ClickButton";
import DamageCounter from "./components/DamageCounter";
import UpgradeShop from "./components/UpgradeShop";
import PlayerNameInput from "./components/PlayerNameInput"; // New Component
import ResetButton from "./components/ResetButton"; // New Component
import BackgroundMusic from "./components/BackgroundMusic"; // New Component
import "./App.css";

function App() {
  const [money, setMoney] = useState(0);
  const [damage, setDamage] = useState(1);
  const [playerName, setPlayerName] = useState("");

  const handleClick = () => {
    setMoney((prevMoney) => prevMoney + damage);
  };

  const handleUpgradeClick = (upgrade) => {
    if (money >= upgrade.cost) {
      setMoney((prevMoney) => prevMoney - upgrade.cost);
      setDamage((prevDamage) => prevDamage + upgrade.increase);
    }
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const resetGame = () => {
    setMoney(0);
    setDamage(1);
  };

  return (
    <div className="App">
      <BackgroundMusic />
      <h1>Monster Smasher</h1>
      <PlayerNameInput
        playerName={playerName}
        onNameChange={handleNameChange}
      />
      <DamageCounter damage={damage} />
      <p>Money: {money}</p>
      <ClickButton onClick={handleClick} />
      <UpgradeShop onUpgradeClick={handleUpgradeClick} currentMoney={money} />
      <ResetButton onReset={resetGame} />
    </div>
  );
}

export default App;
