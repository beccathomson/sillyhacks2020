import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./Game.js";

function App() {
  return (
    <div className="Memez4Lyfe">
      <header className="App-header">
        <h1>Memez4Lyfe</h1>
      </header>
      <Captions />
    </div>
  );
}

export default App;
