import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import React from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
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
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div
              className="chip"
              style={{
                color: "var(--green)",

                borderColor: "var(--green)",
              }}
            >
              {"+" + coin.price_change_percentage_24h}
            </div>
            <TrendingUpRoundedIcon
              className="trending-icon"
              style={{ color: "var(--green)", borderColor: "var(--green)" }}
            />
          </div>
        ) : (
          <div className="chip-flex">
            <div
              className="chip rand"
              style={{
                color: "var(--red)",

                borderColor: "var(--red)",
              }}
            >
              {coin.price_change_percentage_24h + "%"}
            </div>
            <TrendingDownRoundedIcon
              className="trending-icon rand"
              style={{ color: "var(--red)", borderColor: "var(--red)" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Grid;
