import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./DPS.css";

const DPS = ({ dps, onScoreUpdate }) => {
  const [totalDamage, setTotalDamage] = useState(0);

  const updateDamage = useCallback(() => {
    if (dps > 0) {
      setTotalDamage((prevTotal) => {
        const newTotal = prevTotal + dps;
        onScoreUpdate(dps);
        return newTotal;
      });
    }
  }, [dps, onScoreUpdate]);

  useEffect(() => {
    const interval = setInterval(updateDamage, 1000);
    return () => clearInterval(interval);
  }, [updateDamage]);

  return (
    <div className="dps">
      <h2>Damage per Second: {dps.toFixed(2)}</h2>
      <h2>Total Damage: {totalDamage.toFixed(2)}</h2>
    </div>
  );
};

DPS.propTypes = {
  dps: PropTypes.number.isRequired,
  onScoreUpdate: PropTypes.func.isRequired,
};

export default DPS;
