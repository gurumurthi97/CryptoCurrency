import React from "react";
import "./styles.css";
function Grid({ coin }) {
  return (
    <div className="coin-box">
      <div className="logo-div">
        <img className="logo" src={coin.image} />
        <div className="coin-info">
          <p className="symbol">{coin.symbol}</p>
          <p className="name">{coin.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Grid;
