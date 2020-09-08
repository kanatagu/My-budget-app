import React from 'react';
import { IncomeItem } from './IncomeItem';
import { ExpenseItem } from './ExpenseItem';

export const ItemsList = ({ incomeItems, setIncomeItems, expenseItems, setExpenseItems }) => {

  return (
    <div className="list-container">
      <h3>収入一覧</h3>
        <ul className="list">
          {incomeItems.map((incomeItem) => (
            <IncomeItem 
              incomeItems={incomeItems}
              setIncomeItems={setIncomeItems}
              incomeText={incomeItem.text}
              incomeAmount={incomeItem.amount}
              incomeKey={incomeItem.id}
              incomeItem={incomeItem}
            />
          ))}
        </ul>
      <h3>支出一覧</h3>
      <ul className="list">
          {expenseItems.map((expenseItem) => (
            <ExpenseItem
              expenseItems={expenseItems}
              setExpenseItems={setExpenseItems}
              expenseText={expenseItem.text}
              expenseAmount={expenseItem.amount}
              expenseKey={expenseItem.id}
              expenseItem={expenseItem}
            />
          ))}
        </ul>
    </div>
  )
}
