import { useState } from "react";
function MathComp({ factorial }) {
  const [number, setNumber] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (number) {
      factorial(parseInt(number));
      setNumber();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="adding">
      <label>Введите число для выявления его факториала</label>
      <div className="intBtn">
        <input
          type="number"
          value={number}
          placeholder="write a number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Увидеть результат</button>
      </div>
    </form>
  );
}
export default MathComp;
