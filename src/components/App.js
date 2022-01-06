import React from "react";
import Header from "./Header";
import MarketList from "./MarketList";
import ProduceList from "./ProduceList";

function App(){
 
  let floatRight = {
    float: "right"
}
let floatLeft = {
  float: "left"
}
  return (
    <React.Fragment>
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