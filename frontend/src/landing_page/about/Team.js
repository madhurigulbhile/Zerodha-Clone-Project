import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{
          fontFamily: 'Sans-serif',
          fontSize: "16px",
          width: "100%",
          lineHeight: 1.7,
           fontWeight: 500,   
        }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="https://nithinkamath.me/" target="_blank">Homepage</a> / <a href="https://tradingqna.com/u/nithin/summary" target="_blank">TradingQnA</a> /{" "}
            <a href="https://x.com/Nithin0dha" target="_blank">Twitter</a>
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/NikhilKamath.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nikhil Kamath</h4>
          <h6>Co-Founder & CFO</h6>
          <p>Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.</p>
        </div>
        <div className="col-4">
          <img
            src="media/images/Dr.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Dr. Kailash Nadh</h4>
          <h6>CTO</h6>
          <p>Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.</p>
        </div>
        <div className="col-4">
          <img
            src="media/images/VenuMadhav.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Venu Madhav</h4>
          <h6>COO</h6>
          <p>Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.</p>
        </div>
        <div className="col-4">
          <img
            src="media/images/Hanan.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Hanan Delvi</h4>
          <h6>CCO</h6>
          <p>We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.</p>
        </div>
        <div className="col-4">
          <img
            src="media/images/Seema.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Seema Patil</h4>
          <h6>Director</h6>
          <p>
            Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/Karthik.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Karthik Rangappa</h4>
          <h6>Chief of Education</h6>
          <p>
            Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.
          </p>
        </div>
      </div>
    </div >
  );
}

export default Team;