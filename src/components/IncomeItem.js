import React from 'react';

export const IncomeItem = ({ incomeItems, setIncomeItems, incomeItem, incomeText, incomeAmount, incomeKey }) => {

  const deleteHandler = () => {
    setIncomeItems(incomeItems.filter((e) => e.id !== incomeItem.id));
  }


  return (
    <>
      <div>
        <li>{incomeText}<span>{incomeAmount}</span>
        <button onClick={deleteHandler}>×</button>
        </li>
      </div>
    </>
  )
}