import { useState, useEffect } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import NameEntry from "./components/NameEntry";
import Button from "./components/Button";
import BackgroundMusic from "./components/BackgroundMusic";
import Scoreboard from "./components/Scoreboard";
import ThemeToggle from "./components/ThemeToggle";
import Upgrades from "./components/Upgrades";
import DPS from "./components/DPS";
import "./App.css";

const App = () => {
  const [score, setScore] = useState({ clicks: 0, dps: 0, totalDamage: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scores, setScores] = useState([]);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);

  const handleClick = () => {
    setScore((prevScore) => ({
      ...prevScore,
      clicks: prevScore.clicks + 1,
      totalDamage: prevScore.totalDamage + 1,
    }));
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleUpgrade = (increaseDps, cost) => {
    setScore((prevScore) => ({
      ...prevScore,
      dps: prevScore.dps + increaseDps,
      totalDamage: prevScore.totalDamage - cost,
    }));
  };

  const handleSaveName = (name) => {
    setScores((prevScores) => [...prevScores, { name, ...score }]);
  };

  const handleReset = () => {
    setScore({ clicks: 0, dps: 0, totalDamage: 0 });
  };

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prevScore) => ({
        ...prevScore,
        totalDamage: prevScore.totalDamage + prevScore.dps,
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <AnimatedBackground />
      <BackgroundMusic
        src="/assets/audio/CHIPTUNE_Minstrel_Dance(chaosic.com).mp3"
        isPlaying={isMusicPlaying}
      />
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="reset-button-container">
        <button className="reset-button" onClick={handleReset}>
          Reset Game
        </button>
      </div>
      <button onClick={toggleMusic} className="music-toggle">
        {isMusicPlaying ? "Mute Music" : "Play Music"}
      </button>
      <div className="game-container">
        <div className="upper-section">
          <div className="center-content">
            <Button onClick={handleClick} />
          </div>
          <DPS
            dps={score.dps}
            clickCount={score.clicks}
            totalDamage={score.totalDamage}
          />
          <NameEntry onSaveName={handleSaveName} />
          <Scoreboard currentScore={score} savedScores={scores} />
        </div>
        <div className="lower-section">
          <Upgrades totalDamage={score.totalDamage} onUpgrade={handleUpgrade} />
        </div>
      </div>
    </div>
  );
};

export default App;
