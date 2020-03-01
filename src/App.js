import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {History} from './components/History';
import {AddTransaction} from './components/AddTransaction';
import './App.css';
import {ContextProvider} from './context/Context';

const App = () => {
  return (
    <ContextProvider>
      <div className="main-container">
        <Header />
        <div className="inner-container">
          <Balance />
          <IncomeExpenses/>
          <History/>
          <AddTransaction/>
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
