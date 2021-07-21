import React from "react";
import "./App.css";
import Addtransactions from "./components/Addtransactions";
import Balance from "./components/Balance";
import Expenselist from "./components/Expenselist";
import Header from "./components/Header";
import Incomelist from "./components/Incomelist";

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Balance />
        <Addtransactions />
        <Incomelist />
        <Expenselist />
      </div>
    </div>
  );
};

export default App;
