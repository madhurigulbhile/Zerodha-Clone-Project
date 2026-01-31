import React from "react";

function LeftSection({
  imageSrc,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageSrc} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={"https://kite-demo.zerodha.com/dashboard"}>Try Demo</a>
            <a href={"https://zerodha.com/products/kite"} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={"https://play.google.com/store/apps/details?id=com.zerodha.kite3"}>
              <img src={"media/images/Googleplay.png"} />
            </a>
            <a href={"https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"}>
              <img
                src="media/images/appstore.png"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;