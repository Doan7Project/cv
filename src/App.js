import Headers from "./conponents/header";
import Typeroom from "./conponents/room";
import Introroom from "./conponents/introroom";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Headers />
      <Introroom />
      <Typeroom />
    </React.Fragment>
  );
}

export default App;
