import React from "react";

const Incomelist = () => {
  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        <li className="transaction">
          <span className="transaction-text">Salary</span>
          <span className="transaction-amount">Rs 1000</span>
          <button className="delete-btn">
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Incomelist;
