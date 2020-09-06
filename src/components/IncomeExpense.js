import React from 'react';

export const IncomeExpense = ({ incomeItems, expenseItems }) => {

  const incomeAmounts = incomeItems.map(incomeItem => incomeItem.amount);

  const incomeTotal = incomeAmounts.reduce((acc, cur) => acc += cur, 0);

  const expenseAmounts = expenseItems.map(expenseItem => expenseItem.amount);

  const expenseTotal = expenseAmounts.reduce((acc, cur) => acc += cur, 0);

  return (
    <div>
      <div>
        <h4>Income</h4>
        <p>{incomeTotal}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p>{expenseTotal}</p>
      </div>
    </div>
  )
}