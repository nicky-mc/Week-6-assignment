import "react";
import PropTypes from "prop-types";
import "./DPS.CSS";

const DPS = ({ dps, clickCount, totalDamage }) => {
  return (
    <div className="dps-container">
      <h2>Stats</h2>
      <div className="stat-item">Clicks: {clickCount}</div>
      <div className="stat-item">Damage per Second: {dps.toFixed(2)}</div>
      <div className="stat-item">Total Damage: {totalDamage.toFixed(2)}</div>
    </div>
  );
};

DPS.propTypes = {
  dps: PropTypes.number.isRequired,
  clickCount: PropTypes.number.isRequired,
  totalDamage: PropTypes.number.isRequired,
};

export default DPS;
