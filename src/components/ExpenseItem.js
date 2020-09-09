import React from 'react';

export const ExpenseItem = ({ deleteExpense, expenseItem, expenseText, expenseAmount, expenseKey }) => {

  const deleteHandler = () => {
    deleteExpense(expenseItem.docId);
  }


  return (
    <>
      <li><div>{expenseText}<span className="money-minus">{expenseAmount} 円</span></div>
        <button className="delete-btn" onClick={deleteHandler}>×</button>
      </li>
    </>
  )
}