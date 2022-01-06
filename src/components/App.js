import React from "react";
import Header from "./Header";
import MarketList from "./MarketList";
import ProduceList from "./ProduceList";
import marketImage from "./../img/market.png";

function App(){
  let image = {
    width: "100%",
    height:"200px"
  }
  let floatRight = {
    float: "right"
}
let floatLeft = {
  float: "left"
}
  return (
    <React.Fragment>
    <img style= {image} src={marketImage} alt="An image of tickets" />
      <Header />
      <div style={floatLeft}>
      <MarketList />
      </div>
      <div style={floatRight}>
      <ProduceList />
      </div>
    </React.Fragment>
  );
}

export default App;