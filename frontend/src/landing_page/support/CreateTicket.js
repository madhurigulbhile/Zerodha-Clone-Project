import React from "react";

function CreateTicket() {
  return (
    <section>
      <div className="container">
        <div className="row m-4">
          <div className="col-md-3">
            <div className="row p-4 " style={{ backgroundColor: "#e5e7ed" }}>
              <h1 className="fs-4">Featured</h1>
              <ol>
                <ul>
                  <a className="fs-5" href="https://zerodha.com/marketintel/bulletin/439957/special-live-trading-session-on-sunday-february-1-2026">Special Live Trading Session on Sunday, February 1, 2026</a>
                </ul>
                <br />
                <ul>
                  <a className="fs-5" href="https://zerodha.com/marketintel/bulletin/440991/quantity-freeze-limits-for-indices-from-february-01-2026">Quantity Freeze Limits for Indices from February 01, 2026</a>
                </ul>
              </ol>
            </div>
            <div className="row p-4" style={{ backgroundColor: "#e5e7ed", marginTop: "20px" }}>
              <h1 className="fs-4">Quick Links</h1>
              <ol>
                <li>
                  <a className="text-decoration-none fs-5" href="http://localhost:3000/signup">Track account opening</a>
                </li>

                <li>
                  <a className="text-decoration-none fs-5" href="https://kite.zerodha.com/connect/login?sess_id=4cXzzLBXcTy6bTZp8Onzj03BpCPpOila&api_key=console">Track segment activation</a>
                </li>
                <li>
                  <a className="text-decoration-none fs-5" href="https://zerodha.com/marketintel/bulletin/249809/latest-intraday-leverages-mis-bo-co">Intraday margins</a>
                </li>
                <li>
                  <a className="text-decoration-none fs-5" href="https://kite.trade/docs/kite/">Kite User manual</a>
                </li>
                <li>
                  <a className="text-decoration-none fs-5" href="http://localhost:3000/support">Learn how to create a ticket</a>
                </li>
             
              </ol>
            </div>
          </div>
          <div className="col-md-9">
            <div
              style={{
                backgroundColor: "#dde4e5",
                padding: "40px 40px",
                minHeight: "100%",
              }}
            >
              <h1
                className="fs-2"
                style={{
                  fontWeight: 600,
                  marginBottom: "40px",
                }}
              >
                To create a ticket, select a relevant topic
              </h1>

              <div
                style={{
                  maxWidth: "450px",
                }}
              >
                <h3
                  className="fs-2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontWeight: 500,
                    marginBottom: "10px",
                  }}
                >
                  <i
                    className="fa fa-plus-circle mt-2 fs-4"
                    aria-hidden="true"
                    style={{ color: "#000000" }}
                  ></i>
                  Account Opening
                </h3>

                <div style={{ lineHeight: "2" }}>
                  <a className="d-block" href="https://support.zerodha.com/category/account-opening/resident-individual" style={{ textDecoration: "none",fontSize:"20px" }}>
                    Online Account Opening
                  </a>
                  <a className="d-block" href="https://support.zerodha.com/category/account-opening/resident-individual" style={{ textDecoration: "none",fontSize:"20px" }}>
                    Offline Account Opening
                  </a>
                  <a className="d-block" href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening" style={{ textDecoration: "none",fontSize:"20px" }}>
                    Company, Partnership and HUF Account
                  </a>
                  <a className="d-block" href="https://support.zerodha.com/category/account-opening/minor" style={{ textDecoration: "none",fontSize:"20px" }}>
                   Minor Opening
                  </a>
                  <a className="d-block" href="https://support.zerodha.com/category/account-opening/nri-account-opening" style={{ textDecoration: "none",fontSize:"20px" }}>
                    NRI Account Opening
                  </a>
                  <a className="d-block" href="https://support.zerodha.com/category/account-opening/glossary" style={{ textDecoration: "none",fontSize:"20px" }}>
                    Glossary at Zerodha
                  </a>
                  <a className="d-block" href="https://support.zerodha.com/category/trading-and-markets/margins" style={{ textDecoration: "none",fontSize:"20px" }}>
                   Margin Trading Facility (MTF) and Margins
                  </a>
                  <a className="d-block" href="https://support.zerodha.com/category/mutual-funds/nps" style={{ textDecoration: "none",fontSize:"20px" }}>
                    National Pension Scheme (NPS)
                  </a>
                   <a className="d-block" href="https://support.zerodha.com/category/console/corporate-actions" style={{ textDecoration: "none",fontSize:"20px" }}>
                    Corporate actions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;