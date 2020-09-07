import React from 'react';

export const ExpenseItem = ({ expenseItems, setExpenseItems, expenseItem, expenseText, expenseAmount, expenseKey }) => {

  const deleteHandler = () => {
    setExpenseItems(expenseItems.filter((e) => e.id !== expenseItem.id));
  }


  return (
    <>
      <div>
        <li className="item">
        <div>{expenseText}</div>
        <div>{expenseAmount}<span>円</span></div>
        <button onClick={deleteHandler}>×</button>
        </li>
      </div>
    </>
  )
}