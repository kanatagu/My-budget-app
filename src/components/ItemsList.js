import React from 'react';
import { Item } from './Item';

export const ItemsList = ({ incomeItems, setIncomeItems, expenseItems, setExpenseItems }) => {

  return (
    <>
      <h3>History</h3>
      <div>Income list</div>
        <ul>
          {incomeItems.map((item) => (
            <Item 
              incomeItems={incomeItems}
              setIncomeItems={setIncomeItems}
              text={incomeItems.text}
              amount={incomeItems.amount}
              key={incomeItems.id}
              item={item}
            />
          ))}
        </ul>
      <div>Expense list</div>
    </>
  )
}
