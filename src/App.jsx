import React from "react";
import Bank from "./components/Bank";
import BalanceCounter from "./components/BalanceCounter";
function App() {
  return (
    <div className="main">
      <Bank>
        <BalanceCounter />
      </Bank>
    </div>
  );
}
export default App;
