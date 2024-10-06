import { useState } from "react";
import ScoreBoard from "../src/components/Scoreboard.jsx";
import Button from "../src/components/Button.jsx";
import NameEntry from "../src/components/NameEntry.jsx";
import Upgrades from "../src/components/Upgrades.jsx";
import DPS from "../src/components/DPS.jsx";
import AnimatedBackground from "../src/components/AnimatedBackground.jsx";
import BackgroundMusic from "../src/components/BackgroundMusic.jsx";
import "./App.css";

export default function App() {
  const [name, setName] = useState(""); // State to store the player's name
  const [score, setScore] = useState(0);
  // State to store the player's score
  const [dps, setDps] = useState(0); // State to store the player's DPS
  const handleSubmit = (name) => {
    setName(name);
  };
  const handleScoreUpdate = (newScore) => {
    setScore(newScore);
  };
  return (
    <>
      <div className="title">
        <header>
          <h1>Keep on Clicking!</h1>
        </header>
      </div>

      <div className="app">
        <BackgroundMusic />
        <AnimatedBackground />
        <ScoreBoard score={score} name={name} />
        <NameEntry onNameSubmit={handleSubmit} />
        <Button onClick={() => handleScoreUpdate(score + 1)} />
        <Upgrades
          score={score}
          onScoreUpdate={handleScoreUpdate}
          setDps={setDps}
        />
        <DPS dps={dps} />
      </div>
    </>
  );
}
