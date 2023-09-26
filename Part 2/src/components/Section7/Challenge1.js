import { useState } from "react";

export default function Challenge1() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [inputBill, setInputBill] = useState(0);
  const [selectTip, setSelectTip] = useState(0);
  const [selectFriendTip, setSelectFriendTip] = useState(0);

  const averagePercentage = (selectTip + selectFriendTip) / 2;

  function handleReset() {
    setInputBill(0);
    setSelectTip(0);
    setSelectFriendTip(0);
  }
  return (
    <div>
      <h1>Tip Calculator</h1>
      <InputBill inputBill={inputBill} onsetInputBill={setInputBill} />
      <SelectTip percentage={selectTip} onSetpercentage={setSelectTip}>
        <label>How did you like the service?</label>
      </SelectTip>
      <SelectTip
        percentage={selectFriendTip}
        onSetpercentage={setSelectFriendTip}
      >
        <label>How did your friend like the service?</label>
      </SelectTip>
      <TotalBill inputBill={inputBill} averagePercentage={averagePercentage} />
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
}

function InputBill({ inputBill, onsetInputBill }) {
  return (
    <div>
      <label>How much was your bill?</label>
      <input
        type="text"
        value={inputBill}
        onChange={(e) => onsetInputBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectTip({ percentage, onSetpercentage, children }) {
  return (
    <div>
      {children}
      <select
        value={percentage}
        onChange={(e) => onSetpercentage(Number(e.target.value))}
      >
        <option value="0">Dissatified(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing(20%)</option>
      </select>
    </div>
  );
}

function TotalBill({ inputBill, averagePercentage }) {
  const totalTip = Math.round((inputBill / 100) * averagePercentage);
  const total = inputBill + totalTip;
  return (
    <div style={{ margin: "40px 0px" }}>
      <h2>
        You Pay ${total} (${inputBill} + ${totalTip}tip)
      </h2>{" "}
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
