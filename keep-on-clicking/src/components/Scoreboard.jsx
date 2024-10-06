import "react";
import "./Scoreboard.css";

export default function ScoreBoard({ score, name }) {
  return (
    <div className="scoreboard">
      <h2>
        {name ? `${name}'s Score:` : "Score,"}
        {score}{" "}
      </h2>
      <h2>High Score: 0</h2>
    </div>
  );
}
