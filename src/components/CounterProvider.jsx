import { React, useState } from "react";
import MyContext from "./MyContext";
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const increment = () => {
    setCount((num) => (num += parseInt(step)));
  };
  const decrement = () => {
    setCount((num) => (num -= step));
  };
  return (
    <MyContext.Provider value={{ count, setStep, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export default CounterProvider;
