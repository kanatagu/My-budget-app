import React from 'react';
import { IncomeItem } from './IncomeItem';
import { ExpenseItem } from './ExpenseItem';

export const ItemsList = ({ incomeItems, setIncomeItems, expenseItems, setExpenseItems }) => {

  return (
    <>
      <h3>History</h3>
      <div>Income list</div>
        <ul>
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
      <div>Expense list</div>
      <ul>
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
    </>
  )
}
