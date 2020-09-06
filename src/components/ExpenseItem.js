import React from 'react';

export const ExpenseItem = ({ expenseItems, setExpenseItems, expenseItem, expenseText, expenseAmount, expenseKey }) => {

  const deleteHandler = () => {
    setExpenseItems(expenseItems.filter((e) => e.id !== expenseItem.id));
  }


  return (
    <>
      <div>
        <li>{expenseText}<span>{expenseAmount}</span>
        <button onClick={deleteHandler}>×</button>
        </li>
      </div>
    </>
  )
}