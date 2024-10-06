import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import NameEntry from "./components/NameEntry";
import Button from "./components/Button";
import Upgrades from "./components/Upgrades";
import DPS from "./components/DPS";
import AnimatedBackground from "./components/AnimatedBackground";
import BackgroundMusic from "./components/BackgroundMusic";
import "./App.css"; // Main CSS for the application

const App = () => {
  const [name, setName] = useState(""); // State for player's name
  const [score, setScore] = useState(0); // State for player's score
  const [dps, setDps] = useState(0); // State for damage per second

  // Function to update the player's name
  const handleNameSubmit = (name) => {
    setName(name);
  };

  // Function to update the player's score
  const handleScoreUpdate = (newScore) => {
    setScore(newScore);
  };

  return (
    <div className="app">
      <BackgroundMusic />
      <AnimatedBackground />
      <Scoreboard score={score} name={name} />
      <NameEntry onNameSubmit={handleNameSubmit} />
      <Button onClick={() => handleScoreUpdate(score + 1)} />
      <Upgrades
        score={score}
        onScoreUpdate={handleScoreUpdate}
        setDps={setDps}
      />
      <DPS dps={dps} />
    </div>
  );
};

export default App;
