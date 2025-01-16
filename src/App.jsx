import React from "react";
import CounterProvider from "./components/CounterProvider";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="main">
      <h1>счётчик</h1>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}
export default App;
