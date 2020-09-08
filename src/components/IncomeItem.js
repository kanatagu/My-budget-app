import React from 'react';

export const IncomeItem = ({ deleteIncome, incomeItem, incomeText, incomeAmount }) => {

  const deleteHandler = () => {
    deleteIncome(incomeItem.docId);
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