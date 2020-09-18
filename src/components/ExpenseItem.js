import React from 'react';

export const ExpenseItem = ({ deleteExpense, expenseItem, expenseText, expenseAmount, incomeItems }) => {

  const deleteHandler = () => {
    deleteExpense(expenseItem.docId);
  }

  const incomeAmounts = incomeItems.map(incomeItem => incomeItem.amount);

  const incomeTotal = incomeAmounts.reduce((acc, cur) => acc += cur, 0);

  const percentage = () => {
    if (incomeTotal >= 1) {
      return `${Math.round((expenseAmount / incomeTotal ) * 100)} %`;
    } else {
      return '--';
    }
  };

  return (
    <li>
      <div>{expenseText}<span className="money-minus">-{Number(expenseAmount).toLocaleString()}円</span>
      </div>
      <div className="ItemPercentage">{percentage()}</div>
      <button className="delete-btn" onClick={deleteHandler}>×</button>
    </li>
  )
}