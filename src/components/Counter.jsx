import React, { useContext } from "react";
import MyContext from "./MyContext";
const Counter = () => {
  const { count } = useContext(MyContext);
  const { increment } = useContext(MyContext);
  const { decrement } = useContext(MyContext);
  const { setStep } = useContext(MyContext);
  const { step } = useContext(MyContext);
  return (
    <div className="counter">
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={increment}>Больше</button>
        <button onClick={decrement}>меньше</button>
      </div>
      <input
        type="number"
        onChange={(e) => setStep(e.target.value)}
        value={step}
      />
    </div>
  );
};
export default Counter;
