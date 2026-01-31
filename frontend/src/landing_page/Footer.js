import React from "react";

function Footer() {
    return (
        <>
            <style>{`
                .footer {
                    background-color: #fafafa;
                    font-size: 14px;
                    color: #444;
                }

                .footer h6 {
                    font-weight: 600;
                    margin-bottom: 12px;
                }

                .footer a {
                    color: #666;
                    text-decoration: none;
                    display: block;
                    margin-bottom: 8px;
                }

                .footer a:hover {
                    color: #387ed1;
                }

                .footer-logo {
                    width: 140px;
                    margin-bottom: 12px;
                }

               .social-icons a {
                 width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f2f2f2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
                color: #000;
                font-size: 22px;
                margin: 0 10px;
                transition: color 0.3s, transform 0.3s;
                }

               .social-icons a:hover {
                color: #0077b5;
                transform: scale(1.2);
                }


                
                .footer-bottom {
                    font-size: 13px;
                    color: #777;
                    line-height: 1.7;
                }

                .footer-links-row {
                    list-style: none;
                    padding: 0;
                    margin: 20px 0 0;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 14px;
                }

                .footer-links-row li a {
                    color: #387ed1;
                    font-size: 13px;
                }
            `}</style>

            <footer className="footer">
                <div className="container border-top mt-5 pt-5">

                    {/* TOP SECTION */}
                    <div className="row">

                        {/* LOGO + SOCIAL */}
                        <div className="col-md-3">
                            <img
                                src="media/images/logo.png"
                                alt="Zerodha"
                                className="footer-logo"
                            />
                            <p>© 2010 - 2025, Zerodha Broking Ltd.<br />All rights reserved.</p>

                            <div className="social-icons">
                                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                <br />
                                <br/>
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                                <a href="#"><i className="fa-brands fa-telegram"></i></a>
                            </div>


                        </div>

                        {/* ACCOUNT */}
                        <div className="col-md-2">
                            <h6>Account</h6>
                            <a href="#">Open demat account</a>
                            <a href="#">Minor demat account</a>
                            <a href="#">NRI demat account</a>
                            <a href="#">Commodity</a>
                            <a href="#">Dematerialisation</a>
                            <a href="#">Fund transfer</a>
                            <a href="#">MTF</a>
                            <a href="#">Referral program</a>
                        </div>

                        {/* SUPPORT */}
                        <div className="col-md-2">
                            <h6>Support</h6>
                            <a href="#">Contact us</a>
                            <a href="#">Support portal</a>
                            <a href="#">How to file a complaint?</a>
                            <a href="#">Status of complaints</a>
                            <a href="#">Bulletin</a>
                            <a href="#">Circular</a>
                            <a href="#">Z-Connect blog</a>
                            <a href="#">Downloads</a>
                        </div>

                        {/* COMPANY */}
                        <div className="col-md-2">
                            <h6>Company</h6>
                            <a href="#">About</a>
                            <a href="#">Philosophy</a>
                            <a href="#">Press & media</a>
                            <a href="#">Careers</a>
                            <a href="#">Zerodha Cares (CSR)</a>
                            <a href="#">Zerodha.tech</a>
                            <a href="#">Open source</a>
                        </div>

                        {/* QUICK LINKS */}
                        <div className="col-md-3">
                            <h6>Quick links</h6>
                            <a href="#">Upcoming IPOs</a>
                            <a href="#">Brokerage charges</a>
                            <a href="#">Market holidays</a>
                            <a href="#">Economic calendar</a>
                            <a href="#">Calculators</a>
                            <a href="#">Markets</a>
                            <a href="#">Sectors</a>
                        </div>
                    </div>

                    {/* LEGAL TEXT */}
                    <div className="footer-bottom mt-5">
                        <p>
                            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                        </p>

                        <p>
                            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                            <a href="#">Smart Online Dispute Resolution</a>{" "}
                            <a href="#">Grievances Redressal Mechanism</a>
                        </p>

                        <p>
                            Investments in securities market are subject to market risks; read all related
                            documents carefully before investing.
                        </p>
                        <p>
                            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                        </p>
                        <p>
                            India's largest broker based on networth as per NSE. NSE broker factsheet
                        </p>
                        <p>
                            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please<a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-place-a-complaint-at-zerodha">create
                                a ticket here</a>
                        </p>
                        <p>
                            *Customers availing insurance advisory services offered by Ditto
                            (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738)
                            will not have access to the exchange investor grievance redressal forum,
                            SEBI SCORES/ODR, or arbitration mechanism for such products.
                        </p>
                    </div>

                    {/* BOTTOM LINKS */}
                    <ul className="footer-links-row">
                        <li><a href="https://www.nseindia.com/">NSE</a></li>
                        <li><a href="https://www.bseindia.com/">BSE</a></li>
                        <li><a href="https://www.mcxindia.com/">MCX</a></li>
                        <li><a href="https://zerodha.com/terms-and-conditions/">Terms & conditions</a></li>
                        <li><a href="https://zerodha.com/policies-and-procedures/">Policies & procedures</a></li>
                        <li><a href="https://zerodha.com/privacy-policy/">Privacy policy</a></li>
                        <li><a href="https://zerodha.com/disclosure/">Disclosure</a></li>
                        <li><a href="https://zerodha.com/tos/investor-charter/">Investor charter</a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;
