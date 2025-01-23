import React, { useReducer } from "react";
const initialState = { balance: 0 };
function BankReducer(state, action) {
  switch (action.type) {
    case "deposit":
      return { balance: state.balance + action.amount };
    case "withdraw":
      return { balance: state.balance - action.amount };
    case "check":
      return state;
    case "null":
      return { balance: (state.balance = 0) };
    default:
      return state;
  }
}
export { initialState, BankReducer };
