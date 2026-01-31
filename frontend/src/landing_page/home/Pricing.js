import React from "react";

function Pricing() {
  // Styles
  const pricingBoxStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    textAlign: "left",
    position: "relative"
  };

  const imgStyle = {
    width: "120px",
    display: "inline-block",
    verticalAlign: "middle",
    borderStyle: "none"
  };

  const textStyle = {
    display: "inline-block",
    verticalAlign: "middle",
    margin: 0,
    fontSize: "14px",
    color: "#555",
    lineHeight: 1.4
  };

  return (
    <div className="container ">
      <div className="row align-items-center">
        {/* Left content */}
        <div className="col-md-4 p-5">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right pricing boxes */}
        <div className="col-md-8 d-flex justify-content-between">
          {/* Box 1 */}
          <div style={pricingBoxStyle}>
            <img src="media/images/pricing.png" alt="Free account opening" style={imgStyle} />
            <p style={textStyle}>
              Free account
              <br />
              opening
            </p>
          </div>

          {/* Box 2 */}
          <div style={pricingBoxStyle}>
            <img src="media/images/pricing.png" alt="Free equity delivery" style={imgStyle} />
            <p style={textStyle}>
              Free equity delivery
              <br />
              and direct mutual funds
            </p>
          </div>

          {/* Box 3 */}
          <div style={pricingBoxStyle}>
            <img src="media/images/othertrading.png" alt="Intraday and F&O" style={imgStyle} />
            <p style={textStyle}>
              Intraday and
              <br />
              F&amp;O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;


