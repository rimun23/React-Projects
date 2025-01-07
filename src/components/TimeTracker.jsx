import React, { useState, useEffect } from "react";
function TimeTracker() {
  const [seconds, setSeconds] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      alert("таймер завершён");
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [timeLeft, isRunning]);
  const startTimer = () => {
    if (!seconds || isNaN(seconds) || seconds <= 0) {
      alert("неправильно вели");
      return;
    }
    setTimeLeft(seconds);
    setIsRunning(true);
  };
  const stopTimer = () => {
    setIsRunning(false);
    setTimeLeft(null);
    setSeconds("");
  };
  return (
    <div>
      <input
        type="number"
        placeholder="ведите секунду"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />
      <h1>{timeLeft !== null && <p>{timeLeft}</p>}</h1>
      <button onClick={startTimer} disabled={isRunning}>
        запустить
      </button>
      <button onClick={stopTimer}>остановить</button>
    </div>
  );
}
export default TimeTracker;
