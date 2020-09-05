import React from 'react';

export const Item = ({ incomeItems, setIncomeItems, item, text, amount,}) => {

  const deleteHandler = () => {
    setIncomeItems(incomeItems.filter((e) => e.id !== item.id));
  }


  return (
    <>
      <div>
        <li>{incomeItems.text}<span>{incomeItems.amount}</span>
        <button onClick={deleteHandler}>×</button>
        </li>
      </div>
      {/* <div>
        <li>{item.text}<span>{item.amount}</span>
        <button onClick={deleteHandler}>×</button>
        </li>
      </div> */}
  </>

  )
}