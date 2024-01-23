import "./App.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <h1>Basic tip calculater </h1>
      <TipCalculator />
    </div>
  );
}
const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [service1, setService1] = useState(0);
  const [service2, setService2] = useState(0);

  const tip = bill * ((service1 + service2) / 2 / 100);

  const handleReset = () => {
    setBill(0);
    setService1("");
    setService2("");
  };
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Service service={service1} setService={setService1}>
        1st person tip % for service :{" "}
      </Service>
      <Service service={service2} setService={setService2}>
        2nd person tip % for service :{" "}
      </Service>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
};

const Bill = ({ bill, setBill }) => {
  return (
    <label>
      Enter Bill Amount:
      <input value={bill} placeholder="Enter bill amount" onChange={(e) => setBill(Number(e.target.value))} />
    </label>
  );
};

const Service = ({ children, service, setService }) => {
  return (
    <div>
      <label> {children}</label>
      <select value={service} onChange={(e) => setService(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

const Output = ({ bill, tip }) => {
  const totalBill = Number(bill + tip);
  return (
    <h3>
      Your bill amount is Rs: {totalBill} (Rs: {bill} + Rs: {tip} )
    </h3>
  );
};
const Reset = ({ handleReset }) => {
  return <button onClick={handleReset}>Reset</button>;
};
