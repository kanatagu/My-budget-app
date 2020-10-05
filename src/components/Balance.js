import React from 'react';

export const Balance = ({ incomeTotal, expenseItems }) => {

  const expenseAmounts = expenseItems.map(expenseItem => expenseItem.amount);

  const expenseTotal = expenseAmounts.reduce((acc, cur) => acc += cur, 0);

  const balance = incomeTotal - expenseTotal

  return (
    <div className="balance-container">
      <h2>残高</h2>
      <div className="balance">{Number(balance).toLocaleString()}<span > 円</span></div>
    </div>
  )
}

