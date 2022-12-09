import React from "react";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [oneButton, setOneButton] = useState(false);
  const [twoButton, setTwoButton] = useState(false);
  const [threeButton, setThreeButton] = useState(false);
  const [fourButton, setFourButton] = useState(false);

  return (
    <div className="App">
      <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
      <main>
        <CircleSelector
          setOneButton={setOneButton}
          setTwoButton={setTwoButton}
          setThreeButton={setThreeButton}
          setFourButton={setFourButton}
          oneButton={oneButton}
          twoButton={twoButton}
          threeButton={threeButton}
          fourButton={fourButton}
        />
        <Circles
          oneButton={oneButton}
          twoButton={twoButton}
          threeButton={threeButton}
          fourButton={fourButton}
        />
      </main>
    </div>
  );
}
