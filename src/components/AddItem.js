import React, { useState } from 'react';

export const AddItem = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [select, setSelect] = useState('+');

  function handleChange(event) {
    setSelect({value: event.target.value});
  }

  return (
    <div>
      <select defaultValue={select} onChange={handleChange}>
        <option value="+">＋</option>
        <option value="-" >-</option>
      </select>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Text" />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Value" />
      <button>Add</button>
    </div>
  )
} 