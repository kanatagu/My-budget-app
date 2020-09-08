import React from 'react';

export const Balance = ({ incomeItems, expenseItems }) => {

  const incomeAmounts = incomeItems.map(incomeItem => incomeItem.amount);

  const incomeTotal = incomeAmounts.reduce((acc, cur) => acc += cur, 0);

  const expenseAmounts = expenseItems.map(expenseItem => expenseItem.amount);

  const expenseTotal = expenseAmounts.reduce((acc, cur) => acc += cur, 0);

  const balance = incomeTotal - expenseTotal

  return (
    <div className="balance-container">
      <h2>残高</h2>
      <p className="balance">{balance}<span>円</span></p>
    </div>
  )
}

