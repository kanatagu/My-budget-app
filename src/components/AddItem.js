import React, { useState } from 'react';

export const AddItem = ({ inputText, setInputText, inputAmount, setInputAmount, items, setItems }) => {

  const [select, setSelect] = useState('+');

  const handleChange = (e) => {
    setSelect({value: e.target.value});
  }

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    console.log(inputText)
  };

  const inputAmountHandler = (e) => {
    setInputAmount(e.target.value)
    console.log(inputAmount)
  }

  const submitItemHandler = (e) => {
    e.preventDefault();
    setItems([
      ...items, {text: inputText, amount:inputAmount, id: Math.random() * 1000 }
    ]);
    setInputText("");
    setInputAmount("");
  }


  return (
    <>
      <form>
        <select defaultValue={select} onChange={handleChange}>
          <option value="+">＋</option>
          <option value="-" >-</option>
        </select>
        <label>Text</label>
        <input type="text" placeholder="Text" value={inputText} onChange={inputTextHandler} />
        <label>Amount</label>
        <input type="number" placeholder="Value" value={inputAmount} onChange={inputAmountHandler} />
        <button type="submit" onClick={submitItemHandler}>Add</button>
      </form>
    </>
  )

} 