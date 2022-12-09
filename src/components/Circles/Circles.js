import "./Circles.css";

export default function Circles({
  oneButton,
  twoButton,
  threeButton,
  fourButton,
}) {
  return (
    <>
      <div className="Circles">
        <div className={oneButton ? "selected" : ""}>1</div>
        <div className={twoButton ? "selected" : ""}>2</div>
        <div className={threeButton ? "selected" : ""}>3</div>
        <div className={fourButton ? "selected" : ""}>4</div>
      </div>
    </>
  );
}
