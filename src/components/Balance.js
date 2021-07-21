import React from "react";

const Balance = () => {
  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>Rs 0.00</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+Rs 0.00</p>
        </div>
        <div className="minus">
          <h3>Expense</h3>
          <p>-Rs 0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
