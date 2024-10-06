import { useState, useCallback, useMemo } from "react";
import Scoreboard from "./components/Scoreboard";
import NameEntry from "./components/NameEntry";
import Button from "./components/Button";
import Upgrades from "./components/Upgrades";
import DPS from "./components/DPS";
import AnimatedBackground from "./components/AnimatedBackground";
import BackgroundMusic from "./components/BackgroundMusic";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [dps, setDps] = useState(0);

  const handleNameSubmit = useCallback((name) => {
    setName(name);
  }, []);

  const handleScoreUpdate = useCallback((newScore) => {
    setScore(newScore);
  }, []);

  const handleButtonClick = useCallback(() => {
    setScore((prevScore) => prevScore + 1);
  }, []);

  const memoizedUpgrades = useMemo(
    () => (
      <Upgrades
        score={score}
        onScoreUpdate={handleScoreUpdate}
        setDps={setDps}
      />
    ),
    [score, handleScoreUpdate, setDps]
  );

  return (
    <div className="app">
      <AnimatedBackground clickCount={score} />
      <BackgroundMusic />
      <Scoreboard score={score} name={name} />
      <NameEntry onNameSubmit={handleNameSubmit} />
      <Button onClick={handleButtonClick} />
      {memoizedUpgrades}
      <DPS dps={dps} />
    </div>
  );
};

export default App;
