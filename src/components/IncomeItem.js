import React from 'react';

export const IncomeItem = ({ deleteIncome, incomeItems, setIncomeItems, incomeItem, incomeText, incomeAmount, incomeKey }) => {

  const deleteHandler = () => {
    // setIncomeItems(incomeItems.filter((e) => e.id !== incomeItem.id));
    deleteIncome({ docId: incomeItems.docId })
  }


  return (
    <>
      <div>
        <li className="item">
          <div>{incomeText}</div>
          <div>{incomeAmount}<span> 円</span></div>
        <button onClick={deleteHandler}>×</button>
        </li>
      </div>
    </>
  )
}