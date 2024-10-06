import "react";
import "./Upgrade.css"; // Import CSS for Upgrade

const Upgrade = ({ upgrade, purchaseUpgrade, score }) => (
  <div className="upgrade">
    <img src={upgrade.image} alt={upgrade.name} className="upgrade-image" />
    <h3>{upgrade.name}</h3>
    <p>Cost: {upgrade.cost}</p>
    <button
      onClick={() => purchaseUpgrade(upgrade.id)}
      disabled={upgrade.purchased || score < upgrade.cost} // Disable button if already purchased or insufficient funds
    >
      {upgrade.purchased ? "Purchased" : "Buy"}
    </button>
  </div>
);
export default Upgrade;
