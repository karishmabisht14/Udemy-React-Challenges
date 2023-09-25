import { useState } from "react";
import "./style.css";

export default function S6Challenge2() {
  return (
    <div className="container">
      <Layout />
    </div>
  );
}

function Layout() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();

  date.setDate(date.getDate() + count);

  function countDecHandler() {
    setCount((c) => c - step);
  }

  function countIncHandler() {
    setCount((c) => step + c);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <>
      <div className="buttons">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div className="buttons">
        <button onClick={countDecHandler}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={countIncHandler}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {step !== 1 || count !== 0 ? (
        <div>
          <button onClick={handleReset} className="reset">
            Reset
          </button>
        </div>
      ) : null}
    </>
  );
}
