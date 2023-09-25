import { useState } from "react";
import "./style.css";

export default function S6Challenge1() {
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

  function stepDecHandler() {
    setStep((s) => s - 1);
  }

  function stepIncHandler() {
    setStep((s) => s + 1);
  }

  function countDecHandler() {
    setCount((c) => c - step);
  }

  function countIncHandler() {
    setCount((c) => step + c);
  }

  return (
    <>
      <div className="buttons">
        <button onClick={stepDecHandler}>-</button>
        <span>Steps: {step}</span>
        <button onClick={stepIncHandler}>+</button>
      </div>
      <div className="buttons">
        <button onClick={countDecHandler}>-</button>
        <span>Count: {count}</span>
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
    </>
  );
}
