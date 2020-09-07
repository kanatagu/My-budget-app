import React from 'react';

export const IncomeExpense = ({ incomeItems, expenseItems }) => {

  const incomeAmounts = incomeItems.map(incomeItem => incomeItem.amount);

  const incomeTotal = incomeAmounts.reduce((acc, cur) => acc += cur, 0);

  const expenseAmounts = expenseItems.map(expenseItem => expenseItem.amount);

  const expenseTotal = expenseAmounts.reduce((acc, cur) => acc += cur, 0);

  return (
    <div>
      <div>
        <h3>Income</h3>
        <p>{incomeTotal}<span>円</span></p>
      </div>
      <div>
        <h3>Expense</h3>
        <p>{expenseTotal}<span>円</span></p>
      </div>
    </div>
  )
}