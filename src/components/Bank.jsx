import React, { useReducer } from "react";
import { BankReducer, initialState } from "./BankReducer";
import BalanceCounter from "./BalanceCounter";
function Bank() {
  const [state, dispatch] = useReducer(BankReducer, initialState);
  const depositBalance = () => {
    dispatch({ type: "deposit", amount: 100 });
  };
  const withdrawBalance = () => {
    if (state.balance > 0) {
      dispatch({ type: "withdraw", amount: 50 });
    } else alert("вы не можете уйти в минус");
  };
  const checkBalance = () => {
    alert(`на вашем счету ${state.balance}$`);
  };
  const nullBalance = () => {
    dispatch({ type: "null" });
  };

  return (
    <div className="bank">
      <h1>Добро пожаловать в банк!</h1>
      <BalanceCounter balance={state.balance} />
      <div className="commands">
        <button className="btn1" onClick={depositBalance}>
          увеличить баланс на 100$
        </button>
        <button className="btn2" onClick={withdrawBalance}>
          уменьшить баланс на 50$
        </button>
        <button className="btn3" onClick={checkBalance}>
          проверить баланс
        </button>
        <button className="btn4" onClick={nullBalance}>
          обналичить счёт
        </button>
      </div>
    </div>
  );
}
export default Bank;
