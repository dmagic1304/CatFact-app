import "./App.css";
import Header from "./components/HeadComponent";
import Facts from "./components/FactsComponent";
import Main from "./components/MainComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
