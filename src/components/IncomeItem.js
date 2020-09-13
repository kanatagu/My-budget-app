import React from 'react';

export const IncomeItem = ({ deleteIncome, incomeItem, incomeText, incomeAmount }) => {

  const deleteHandler = () => {
    deleteIncome(incomeItem.docId);
  }

  return (
    <li>
      <div>{incomeText}<span className="money-plus">+{Number(incomeAmount).toLocaleString()}円</span>
      </div>
      <button className="delete-btn" onClick={deleteHandler}>×</button>
    </li>
  )
}