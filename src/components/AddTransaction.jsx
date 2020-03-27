import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      //turn the amount from string into a number
      amount: +amount
    };
    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div class="form-control">
          <label for="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div class="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </>
  );
};
