import React, { useContext, useState } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Dynamic margin calculation
  const marginRequired = (stockQuantity * stockPrice).toFixed(2);

  // Validation before sending order
  const isValidOrder = stockQuantity > 0 && stockPrice > 0;

  const handleSellClick = async () => {
    if (!isValidOrder) {
      setError("Quantity and Price must be greater than 0.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });

      console.log("Response from backend:", response.data);
      // Reset state and close window
      setStockQuantity(1);
      setStockPrice(0.0);
      closeSellWindow();
    } catch (err) {
      console.error("Error placing sell order:", err);
      setError(
        err.response?.data?.message ||
          "Failed to place sell order. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="buttons">
        <span>Margin required ₹{marginRequired}</span>
        <div>
          <button
            className="btn btn-blue"
            onClick={handleSellClick}
            disabled={loading || !isValidOrder}
          >
            {loading ? "Processing..." : "Sell"}
          </button>
          <button className="btn btn-grey" onClick={closeSellWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;


