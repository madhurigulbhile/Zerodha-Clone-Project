import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div
        className="flex flex-wrap pb-5 md:pb-8 gap-3 justify-between items-center"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          padding: "40px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          className="pr-2 md:text-4xl text-xl sm:text-2xl font-semibold"
          style={{
            paddingRight: "10px",
            fontSize: "40px",
            fontWeight: 500,
            margin: 0,
          }}
        >
          <a
            href="/"
            className="cursor-pointer"
            style={{
              textDecoration: "none",
              color: "#252323",
              cursor: "pointer",
            }}
          >
            Support Portal
          </a>
        </p>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://kite.zerodha.com/connect/login?api_key=supportportal&sess_id=EVjDYl91PPniiI3IxZ9rYwAOPew4zuAm"
          className="flex py-1.5 px-2 md:px-4 md:py-2 md:text-base hover:bg-z-black bg-z-blue text-white text-sm rounded-sm gap-1.5 items-center shrink-0 outline-offset-2"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 12px",
            backgroundColor: "#214ad2",
            color: "#fff",
            fontSize: "16px",
            fontWeight: 500,
            borderRadius: "5px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          <span
            className="md:block hidden fontello-tickets"
            style={{ display: "none" }}
          ></span>
          <span className="font-medium">Track Tickets</span>
        </a>
        <div className="col-11">
          <input placeholder="Eg: How do i open my account? How do I activate F&O?" />
        </div> 
      </div>
    </section>
  );
}

export default Hero;