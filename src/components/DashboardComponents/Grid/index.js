import { green } from "@mui/material/colors";
import React from "react";
import "./styles.css";
function Grid({ coin }) {
  return (
    <div className="coin-box">
      <div className="logo-div">
        <img className="logo" src={coin.image} />
        <div className="coin-info">
          <p className="symbol">{coin.symbol}-USD</p>
          <p className="name">{coin.name}</p>
        </div>
      </div>
      <div className="data-div">
        <div
          className="chip"
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
            borderColor:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          {coin.price_change_percentage_24h > 0
            ? "+" + coin.price_change_percentage_24h
            : coin.price_change_percentage_24h}
        </div>
      </div>
    </div>
  );
}

export default Grid;
