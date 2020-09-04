import React from 'react';

export const Item = ({ items, setItems, item, text, amount }) => {

  const deleteHandler = () => {
    setItems(items.filter((e) => e.id !== item.id));
  }

  return (
    <div>
      <li>{item.text}<span>{item.amount}</span>
      <button onClick={deleteHandler}>×</button>
      </li>
    </div>
  )
}