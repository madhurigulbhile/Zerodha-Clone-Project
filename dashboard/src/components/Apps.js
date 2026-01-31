import React, { useState, useEffect } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Apps = () => {
  const [watchlist, setWatchlist] = useState(["AAPL", "TSLA", "RELIANCE.BSE"]);
  const [stockData, setStockData] = useState({});
  const [newsData, setNewsData] = useState({});
  const [newStock, setNewStock] = useState("");
  const [portfolioValue, setPortfolioValue] = useState(0);

  // Dummy stock data
  const dummyStockPrices = {
    AAPL: [150, 152, 148, 155, 157, 160, 158],
    TSLA: [700, 710, 720, 730, 725, 740, 735],
    "RELIANCE.BSE": [2300, 2320, 2310, 2330, 2340, 2350, 2360],
  };

  const dummyDates = ["24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"];

  const dummyNews = {
    AAPL: [
      { title: "Apple hits new high", link: "#", publisher: "Reuters", pubDate: Date.now() },
      { title: "Apple releases new iPhone", link: "#", publisher: "Bloomberg", pubDate: Date.now() },
    ],
    TSLA: [
      { title: "Tesla announces new factory", link: "#", publisher: "CNBC", pubDate: Date.now() },
    ],
    "RELIANCE.BSE": [
      { title: "Reliance Q4 results released", link: "#", publisher: "ET", pubDate: Date.now() },
    ],
  };

  // Initialize stock data from dummy
  useEffect(() => {
    const data = {};
    watchlist.forEach((symbol) => {
      const prices = dummyStockPrices[symbol] || [0, 0, 0, 0, 0, 0, 0];
      const price = prices[prices.length - 1];
      const change = price - prices[prices.length - 2];
      data[symbol] = { price, change, prices, dates: dummyDates };
    });
    setStockData(data);
    setNewsData(dummyNews);
  }, [watchlist]);

  // Portfolio summary
  useEffect(() => {
    let total = 0;
    watchlist.forEach((symbol) => {
      if (stockData[symbol]) total += stockData[symbol].price;
    });
    setPortfolioValue(total);
  }, [stockData, watchlist]);

  const handleAddStock = () => {
    if (newStock && !watchlist.includes(newStock.toUpperCase())) {
      setWatchlist([...watchlist, newStock.toUpperCase()]);
      setNewStock("");
    }
  };

  const handleRemoveStock = (symbol) => {
    setWatchlist(watchlist.filter((s) => s !== symbol));
    setStockData((prev) => {
      const copy = { ...prev };
      delete copy[symbol];
      return copy;
    });
    setNewsData((prev) => {
      const copy = { ...prev };
      delete copy[symbol];
      return copy;
    });
  };

  // Dynamic colors for charts
  const chartColors = watchlist.map((_, i) => `hsl(${(i * 360) / watchlist.length}, 70%, 50%)`);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Stock Dashboard (Offline)</h1>

      {/* Add stock */}
      <div style={{ margin: "20px 0", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Enter stock symbol"
          value={newStock}
          onChange={(e) => setNewStock(e.target.value)}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button
          onClick={handleAddStock}
          style={{
            padding: "8px 12px",
            marginLeft: "10px",
            backgroundColor: "#2c3e50",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      {/* Portfolio Summary */}
      <div style={{ marginBottom: "30px", maxWidth: "600px", margin: "auto" }}>
        <h2>Portfolio Summary</h2>
        <p>Total Value: ₹{portfolioValue.toFixed(2)}</p>
        <Doughnut
          data={{
            labels: watchlist,
            datasets: [
              {
                label: "Allocation",
                data: watchlist.map((s) => (stockData[s] ? stockData[s].price : 0)),
                backgroundColor: chartColors,
              },
            ],
          }}
        />
      </div>

      {/* Watchlist Table */}
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "40px" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Symbol</th>
              <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Price (₹)</th>
              <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Change</th>
              <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((symbol) => (
              <tr key={symbol}>
                <td style={{ padding: "8px" }}>{symbol}</td>
                <td style={{ padding: "8px" }}>
                  {stockData[symbol] ? stockData[symbol].price.toFixed(2) : "Loading..."}
                </td>
                <td
                  style={{
                    padding: "8px",
                    color:
                      stockData[symbol] && stockData[symbol].change >= 0
                        ? "green"
                        : "red",
                  }}
                >
                  {stockData[symbol]
                    ? `${stockData[symbol].change >= 0 ? "+" : ""}${stockData[symbol].change.toFixed(2)}`
                    : "--"}
                </td>
                <td style={{ padding: "8px" }}>
                  <button
                    onClick={() => handleRemoveStock(symbol)}
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "#e74c3c",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Charts & News */}
      {watchlist.map((symbol) => (
        <div key={symbol} style={{ marginBottom: "50px", maxWidth: "800px", margin: "auto" }}>
          <h2>{symbol} Price Chart (Last 7 Days)</h2>
          {stockData[symbol] ? (
            <Line
              data={{
                labels: stockData[symbol].dates,
                datasets: [
                  {
                    label: symbol,
                    data: stockData[symbol].prices,
                    borderColor: "#2c3e50",
                    backgroundColor: "rgba(44, 62, 80, 0.2)",
                  },
                ],
              }}
              options={{ responsive: true, plugins: { legend: { position: "top" } } }}
            />
          ) : (
            <p>Loading chart...</p>
          )}

          {/* News Feed */}
          <h3 style={{ marginTop: "20px" }}>Latest News</h3>
          {newsData[symbol] && newsData[symbol].length > 0 ? (
            <ul>
              {newsData[symbol].map((news, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <a
                    href={news.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#3498db" }}
                  >
                    {news.title}
                  </a>
                  <p style={{ fontSize: "12px", color: "#555" }}>
                    {news.publisher || "Unknown"} - {news.pubDate ? new Date(news.pubDate).toLocaleDateString() : ""}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No news available for {symbol}.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Apps;
