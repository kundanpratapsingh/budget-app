import React from "react";

const Expenselist = () => {
  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        <li className="transaction">
          <span className="transaction-text">Rent</span>
          <span className="transaction-amount">Rs 5000</span>
          <button className="delete-btn">
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Expenselist;
