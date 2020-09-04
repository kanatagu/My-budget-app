import React from 'react';
import { Item } from './Item';

export const ItemsList = ({ items, setItems, }) => {

  return (
    <>
      <h3>History</h3>
      <div>Income list</div>
        <ul>
          {items.map((item) => (
            <Item 
              items={items}
              setItems={setItems}
              text={items.text}
              amount={items.amount}
              key={items.id}
              item={item}
            />
          ))}
        </ul>
      <div>Expense list</div>
    </>
  )
}
