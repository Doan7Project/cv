import Headers from "./conponents/header";
import Introroom from "./conponents/introroom";
import RoomDetail from "./conponents/roomdetail";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Headers />
      <Introroom />
      <RoomDetail />
    </React.Fragment>
  );
}

export default App;
