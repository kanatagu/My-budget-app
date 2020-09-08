import React from 'react';

export const ExpenseItem = ({ deleteExpense, expenseItem, expenseText, expenseAmount, expenseKey }) => {

  const deleteHandler = () => {
    deleteExpense(expenseItem.docId);
  }


  return (
    <>
      <div>
        <li className="item">
        <div>{expenseText}</div>
        <div>{expenseAmount}<span> 円</span></div>
        <button onClick={deleteHandler}>×</button>
        </li>
      </div>
    </>
  )
}