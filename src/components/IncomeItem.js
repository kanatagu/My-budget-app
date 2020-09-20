import React from 'react';

export const IncomeItem = ({ deleteIncome, incomeItem, incomeText, incomeAmount }) => {

  const deleteHandler = () => {
    deleteIncome(incomeItem.docId);
  }

  return (
    <li>
      <div>{incomeText}</div>
      <div className="money-plus">+{Number(incomeAmount).toLocaleString()}円</div>
      <button className="delete-btn" onClick={deleteHandler}>×</button>
    </li>
  )
}