import "react";
import upgradesData from "../library/upgrades.json";

const UpgradeShop = ({ onUpgradeClick, currentMoney }) => {
  return (
    <div className="upgrade-shop">
      <h2>Upgrade Shop</h2>
      {upgradesData.map((upgrade) => (
        <div key={upgrade.id} className="upgrade">
          <img src={upgrade.image} alt={upgrade.name} />
          <h3>{upgrade.name}</h3>
          <p>Cost: {upgrade.cost}</p>
          <p>Damage Increase: {upgrade.increase}</p>
          <button
            onClick={() => onUpgradeClick(upgrade)}
            disabled={currentMoney < upgrade.cost}
          >
            {currentMoney >= upgrade.cost ? "Buy" : "Not enough money"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UpgradeShop;
