import "react";
import { useState, useEffect } from "react";
import "./DPS.css";

const DPS = ({ dps }) => {
  const [totalDamage, setTotalDamage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalDamage((prevTotal) => prevTotal + dps);
    }, 1000);
    return () => clearInterval(interval);
  }, [dps]);
  return (
    <div className="dps">
      <h2>Damage per Second: {dps}</h2>
      <h2>Total Damage: {totalDamage}</h2>
    </div>
  );
};
export default DPS;
