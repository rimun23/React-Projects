import { useState } from "react";
const useMath = () => {
  const [numbers, setNumbers] = useState([]);
  const factorial = (num) => {
    if (num === 0 || num === 1) return setNumbers(1);
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return setNumbers(num);
  };
  return { factorial, numbers };
};
export default useMath;
