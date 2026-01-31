import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-md-6 mx-auto">
          <a href="" style={{ textDecoration: "none" }}>
            <h2 className="fs-5">Brokerage calculator</h2>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "18px" }}
            className="text-mut"
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-md-6 mx-auto">
       <div
  style={{
    padding: "30px 40px",
    borderRadius: "6px",
    maxWidth: "800px",
  }}
>
  <h2
    style={{
      fontSize: "22px",
      fontWeight: 600,
      marginBottom: "20px",
      color: "#267cf6",
      textAlign: "center",
    }}
  >
    List of Charges
  </h2>

  <ul
    style={{
      paddingLeft: "18px",
      lineHeight: "1.9",
      fontSize: "18px",
    }}
  >
    <li>Interest is charged on delayed payments or debit balances as applicable.</li>
    <li>Charges may vary for different segments such as equity, F&O, commodities,
  and currency derivatives.</li>
    <li>
      Brokerage rates and charges are subject to change as per company policy and
  regulatory requirements.
    </li>
    <li>
     Stamp duty charges vary by state and will be levied as per state laws.
    </li>
    <li>
      Securities Transaction Tax (STT) is applicable on all buy/sell transactions
  as per government rules.
    </li>
    <li>
        Statutory charges such as STT, GST, stamp duty, and exchange transaction
    charges are applicable as per regulations.
    </li>
  </ul>
</div>  
</div>

        <section
          className="charges-sections"
          style={{
            fontFamily: '"Inter", serif',
            color: "#080606",
            padding: "10px",
          }}
        >
          <div className="container">
            <h2 className="charges-subheadings"
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
                marginBottom: "20px",
                 textAlign:"left",
              }}>
              Charges for optional value added services
            </h2>

            <div className="table-container"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                overflow: "hidden",
              }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                }}>
                <thead
                  style={{
                    backgroundColor: "#fafafa",
                  }}>
                  <tr>
                    <th style={{
                      textAlign: "left",
                      fontWeight: 500,
                      padding: "16px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                    >Service</th>
                    <th style={{
                      textAlign: "left",
                      fontWeight: 500,
                      padding: "16px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                    >Billing Frequency</th>
                    <th style={{
                      textAlign: "left",
                      fontWeight: 500,
                      padding: "16px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                    >Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                       padding: "16px",
                       textAlign:"left",
                        fontSize: "0.95rem",
                        borderBottom: "1px solid #f0f0f0",
                      }}>Tickertape</td>
                    <td
                      style={{
                        padding: "16px",
                         textAlign:"left",
                        fontSize: "0.95rem",
                        borderBottom: "1px solid #f0f0f0",
                      }}>Monthly / Annual</td>
                    <td
                      style={{
                        padding: "16px",
                         textAlign:"left",
                        fontSize: "0.95rem",
                        borderBottom: "1px solid #f0f0f0",
                      }}>Free: 0 | Pro: 249/2399</td>
                  </tr>
                  <tr>
                    <td style={{
                      padding: "16px",
                       textAlign:"left",
                      fontSize: "0.95rem",
                      borderBottom: "1px solid #f0f0f0",
                    }}>Smallcase</td>
                    <td style={{
                      padding: "16px",
                       textAlign:"left",
                      fontSize: "0.95rem",
                      borderBottom: "1px solid #f0f0f0",
                    }}>Per transaction</td>
                    <td style={{
                      padding: "16px",
                       textAlign:"left",
                      fontSize: "0.95rem",
                      borderBottom: "1px solid #f0f0f0",
                    }}>Buy &amp; Invest More: 100 | SIP: 10</td>
                  </tr>
                  <tr>
                    <td style={{
                      padding: "16px",
                      fontSize: "0.95rem",
                       textAlign:"left",
                      borderBottom: "1px solid #f0f0f0",
                    }}>Kite Connect</td>
                    <td style={{
                      padding: "16px",
                      fontSize: "0.95rem",
                       textAlign:"left",
                      borderBottom: "1px solid #f0f0f0",
                    }}>Monthly</td>
                    <td style={{
                      padding: "16px",
                       textAlign:"left",
                      fontSize: "0.95rem",
                      borderBottom: "1px solid #f0f0f0",
                    }}>Connect: 500 | Personal: Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <h2
          id="charges-explained"
          style={{
            WebkitTextSizeAdjust: "100%",
            interpolateSize: "allow-keywords",
            fontFamily: '"Inter", serif',
            WebkitFontSmoothing: "antialiased",
            color: "#424242",
            marginTop: 0,
            fontWeight: 500,
            marginBottom: "20px",
            lineHeight: 1.5,
            fontSize: "1.5rem",
            paddingTop: "60px",
            textAlign: "left",
          }}
        >
          Charges explained
        </h2>

        <div
          className="row between"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "40px",
            fontFamily: '"Inter", serif',
            color: "#424242",
          }}
        >

          <div
            className="six columns"
            style={{
              fontFamily: '"Inter", serif',
              fontSize: "16px",
              lineHeight: 1.7,
              textAlign: "left",
              flex: "0 0 48%",
              boxSizing: "border-box",
            }}
          >

            <p>Securities/Commodities transaction tax</p>
            <p class="text-12">Tax by the government when transacting on the exchanges. Charged as
              above on both buy and sell sides when trading equity delivery. Charged only on selling side when
              trading intraday or on F&amp;O.</p>
            <p class="text-12">When trading at Zerodha, STT/CTT can be a lot more than the brokerage
              we charge. Important to keep a tab.</p>
            <p>Transaction/Turnover Charges</p>
            <p class="text-12">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
            <p class="text-12">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to
              ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
            <p class="text-12">BSE has revised transaction charges in SS and ST groups to ₹1,00,000
              per crore of gross turnover.</p>
            <p class="text-12">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
            <p class="text-12">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
            <p>Call &amp; trade</p>
            <p class="text-12">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
            <p>Stamp charges</p>
            <p class="text-12">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
            <p>NRI brokerage charges</p>
            <ul class="text-12 list-items">
              <li>
                For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&amp;O (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
            <p>Account with debit balance</p>
            <p class="text-12">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
            <p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
            <ul class="list-items text-12">
              <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
              <li>Options - ₹50 per crore + GST traded value (premium value).</li>
              <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
            </ul>
            <p>Margin Trading Facility (MTF)</p>
            <ul class="list-items text-12">
              <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
              <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
              <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
            </ul>
          </div>
          <div
            className="six columns"
            style={{
              fontFamily: '"Aptos", serif',
              fontSize: "16px",
              lineHeight: 1.7,
              textAlign: "left",
              flex: "0 0 48%",
              boxSizing: "border-box",
            }}
          >

            <p>GST</p>
            <p class="text-12">Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)</p>
            <p>SEBI Charges</p>
            <p class="text-12">Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.</p>
            <p id="depo_charges">DP (Depository participant) charges</p>
            <p class="text-12">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
            <p class="text-12">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
            <p class="text-12">Debit transactions of mutual funds &amp; bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
            <p id="depo_charges">Pledging charges</p>
            <p class="text-12">₹30 + GST per pledge request per ISIN.</p>
            <p>AMC (Account maintenance charges)</p>
            <p class="text-12">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha">Click here</a></p>
            <p class="text-12">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="https://support.zerodha.com/category/account-opening/charges-at-zerodha/statutory-and-exchange/articles/what-is-the-annual-maintenance-charge">Click here</a></p>
            <p>Corporate action order charges</p>
            <p class="text-12">₹20 plus GST will be charged for OFS / buyback / takeover / delisting
              orders placed through Console.</p>
            <p>Off-market transfer charges</p>
            <p class="text-12">₹25 per transaction.</p>
            <p>Physical CMR request</p>
            <p class="text-12">First CMR request is free. ₹20 + ₹100 (courier charge) +
              18% GST for subsequent requests.</p>
            <p>Payment gateway charges</p>
            <p class="text-12">₹9 + GST (Not levied on transfers done via UPI)</p>
            <p>Delayed Payment Charges</p>
            <p class="text-12">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="https://support.zerodha.com/category/console/ledger/articles/interest-charges">Learn more</a>.</p>
            <p>Trading using 3-in-1 account with block functionality</p>
            <ul class="list-items text-12">
              <li><b>Delivery &amp; MTF Brokerage:</b> 0.5% per executed order.</li>
              <li><b>Intraday Brokerage:</b> 0.05% per executed order.</li>
            </ul>
          </div>
        </div>

        <div
          className="text-12"
          style={{
            display: "block",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: 0,
            marginInlineEnd: 0,
            unicodeBidi: "isolate",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginTop: "70px",
          }}

        >
          <h5>Disclaimer</h5>
          <p>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>
      </div>
    </div >
  );
}

export default Brokerage;