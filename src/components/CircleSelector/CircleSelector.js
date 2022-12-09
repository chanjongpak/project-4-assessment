import "./CircleSelector.css";

export default function CircleSelector({
  setOneButton,
  setTwoButton,
  setThreeButton,
  setFourButton,
  oneButton,
  twoButton,
  threeButton,
  fourButton,
}) {
  function handleBtnOne(e) {
    setOneButton(true);
    setTwoButton(false);
    setThreeButton(false);
    setFourButton(false);
  }

  function handleBtnTwo(e) {
    setTwoButton(true);
    setOneButton(false);
    setThreeButton(false);
    setFourButton(false);
  }

  function handleBtnThree(e) {
    setThreeButton(true);
    setTwoButton(false);
    setOneButton(false);
    setFourButton(false);
  }

  function handleBtnFour(e) {
    setFourButton(true);
    setTwoButton(false);
    setThreeButton(false);
    setOneButton(false);
  }

  return (
    <>
      <div className="CircleSelector">
        <button onClick={handleBtnOne} className={oneButton ? "selected" : ""}>
          {oneButton ? "CIRCLE 1 SELECTED" : "SELECT CIRCLE 1"}
        </button>
        <button onClick={handleBtnTwo} className={twoButton ? "selected" : ""}>
          {twoButton ? "CIRCLE 2 SELECTED" : "SELECT CIRCLE 2"}
        </button>
        <button
          onClick={handleBtnThree}
          className={threeButton ? "selected" : ""}
        >
          {threeButton ? "CIRCLE 3 SELECTED" : "SELECT CIRCLE 3"}
        </button>
        <button
          onClick={handleBtnFour}
          className={fourButton ? "selected" : ""}
        >
          {fourButton ? "CIRCLE 4 SELECTED" : "SELECT CIRCLE 4"}
        </button>
      </div>
    </>
  );
}
