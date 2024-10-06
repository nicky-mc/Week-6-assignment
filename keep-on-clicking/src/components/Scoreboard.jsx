import "react";
import "./Scoreboard.css";

const Scoreboard = ({ currentScore, savedScores }) => (
  <div className="scoreboard">
    <h2>Current Score</h2>
    <div className="score-item">Clicks: {currentScore.clicks}</div>
    <div className="score-item">DPS: {currentScore.dps.toFixed(2)}</div>
    <div className="score-item">
      Total Damage: {currentScore.totalDamage.toFixed(2)}
    </div>

    {savedScores.length > 0 && (
      <>
        <h2>Saved Scores</h2>
        <ul>
          {savedScores.map((score, index) => (
            <li key={index}>
              {score.name}: Clicks - {score.clicks}, DPS -{" "}
              {score.dps.toFixed(2)}, Total Damage -{" "}
              {score.totalDamage.toFixed(2)}
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default Scoreboard;
