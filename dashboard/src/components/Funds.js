import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, type = "green", to = "#" }) => {
  const styles = {
    padding: "8px 15px",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: 500,
    display: "inline-block",
    textAlign: "center",
    backgroundColor: type === "green" ? "#27ae60" : "#3498db",
    color: "#fff",
    marginRight: "10px",
    marginTop: "5px",
  };
  return (
    <Link to={to} style={styles}>
      {text}
    </Link>
  );
};

const Funds = () => {
  // Equity data
  const equityData = [
    { label: "Available margin", value: 4043.10, highlight: true },
    { label: "Used margin", value: 3757.30 },
    { label: "Available cash", value: 4043.10 },
    { separator: true },
    { label: "Opening Balance", value: 4043.10 },
    { label: "Ledger Balance", value: 3736.40 },
    { label: "Payin", value: 4064.00 },
    { label: "SPAN", value: 0.0 },
    { label: "Delivery margin", value: 0.0 },
    { label: "Exposure", value: 0.0 },
    { label: "Options premium", value: 0.0 },
    { separator: true },
    { label: "Collateral (Liquid funds)", value: 0.0 },
    { label: "Collateral (Equity)", value: 0.0 },
    { label: "Total Collateral", value: 0.0 },
  ];

  // Commodity data
  const commodityData = [
    { label: "Available margin", value: 1200.50, highlight: true },
    { label: "Used margin", value: 800.0 },
    { label: "Available cash", value: 1200.50 },
    { separator: true },
    { label: "Opening Balance", value: 1200.50 },
    { label: "Payin", value: 500.0 },
    { label: "SPAN", value: 0.0 },
    { label: "Exposure", value: 0.0 },
    { label: "Collateral (Commodity)", value: 0.0 },
    { label: "Total Collateral", value: 0.0 },
  ];

  // Calculate portfolio totals
  const totalEquity = equityData
    .filter((item) => typeof item.value === "number")
    .reduce((sum, item) => sum + item.value, 0);

  const totalCommodity = commodityData
    .filter((item) => typeof item.value === "number")
    .reduce((sum, item) => sum + item.value, 0);

  // Inline styles
  const containerStyle = { padding: "20px", fontFamily: "Arial, sans-serif" };
  const topStyle = { display: "flex", flexDirection: "column", gap: "15px", marginBottom: "30px" };
  const totalsStyle = { display: "flex", gap: "20px", flexWrap: "wrap" };
  const totalCardStyle = {
    flex: 1,
    minWidth: "200px",
    background: "#f1f1f1",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
    fontWeight: "bold",
  };
  const rowStyle = { display: "flex", gap: "20px", flexWrap: "wrap" };
  const colStyle = { flex: 1, minWidth: "280px", background: "#f8f9fa", padding: "20px", borderRadius: "8px" };
  const tableStyle = { display: "flex", flexDirection: "column", gap: "8px" };
  const rowDataStyle = { display: "flex", justifyContent: "space-between" };
  const highlightStyle = { color: "#27ae60", fontWeight: "bold" };
  const titleStyle = { marginBottom: "15px" };
  const commodityTitleStyle = { marginBottom: "10px", fontWeight: "bold" };

  return (
    <section style={containerStyle}>
      {/* Top Actions */}
      <div style={topStyle}>
        <p>Instant, zero-cost fund transfers with UPI</p>
        <div>
          <Button text="Add funds" type="green" />
          <Button text="Withdraw" type="blue" />
        </div>
      </div>

      {/* Portfolio Totals */}
      <div style={totalsStyle}>
        <div style={totalCardStyle}>Equity Total: ₹{totalEquity.toFixed(2)}</div>
        <div style={totalCardStyle}>Commodity Total: ₹{totalCommodity.toFixed(2)}</div>
      </div>

      {/* Equity & Commodity Columns */}
      <div style={rowStyle}>
        {/* Equity Column */}
        <article style={colStyle}>
          <h3 style={titleStyle}>Equity</h3>
          <div style={tableStyle}>
            {equityData.map((item, index) =>
              item.separator ? (
                <hr key={index} />
              ) : (
                <div style={rowDataStyle} key={index}>
                  <p>{item.label}</p>
                  <p style={item.highlight ? highlightStyle : {}}>{item.value.toFixed ? item.value.toFixed(2) : item.value}</p>
                </div>
              )
            )}
          </div>
        </article>

        {/* Commodity Column */}
        <article style={colStyle}>
          <h3 style={commodityTitleStyle}>Commodity</h3>
          <div style={tableStyle}>
            {commodityData.map((item, index) =>
              item.separator ? (
                <hr key={index} />
              ) : (
                <div style={rowDataStyle} key={index}>
                  <p>{item.label}</p>
                  <p style={item.highlight ? highlightStyle : {}}>{item.value.toFixed ? item.value.toFixed(2) : item.value}</p>
                </div>
              )
            )}
          </div>
          <div style={{ marginTop: "15px", textAlign: "center" }}>
            <Button text="Open Account" type="blue" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Funds;

