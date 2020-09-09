import React from 'react';

export const IncomeExpense = ({ incomeItems, expenseItems }) => {

  const incomeAmounts = incomeItems.map(incomeItem => incomeItem.amount);

  const incomeTotal = incomeAmounts.reduce((acc, cur) => acc += cur, 0);

  const expenseAmounts = expenseItems.map(expenseItem => expenseItem.amount);

  const expenseTotal = expenseAmounts.reduce((acc, cur) => acc += cur, 0);

  return (
    <div className="inc-exp-container">
      <div className="inc-container">
        <h2>収入</h2>
        <p className="income-total">{incomeTotal}<span className="income-yen">円</span></p>
      </div>
      <div>
        <h2>支出</h2>
        <p className="expense-total">{expenseTotal}<span className="expense-yen">円</span></p>
      </div>
    </div>
  )
}