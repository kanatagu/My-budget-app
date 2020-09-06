import React, { useState } from 'react';

export const AddItem = ({ inputText, setInputText, inputAmount, setInputAmount, incomeItems, setIncomeItems, expenseItems, setExpenseItems, type, setType}) => {


  const typeHandler = (e) => {
    setType(e.target.value)
    console.log(type)
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
    if ( type === 'inc' ) {
      setIncomeItems([
      ...incomeItems, {text: inputText, amount:inputAmount, id: Math.random() * 1000 }
      ]);
    } else if ( type === 'exp' ) {
      setExpenseItems([
        ...expenseItems, {text: inputText, amount:inputAmount, id: Math.random() * 1000 }
      ]);
    }
  }

  return (
    <>
      <form >
        <select onChange={typeHandler}>
          <option value="inc">＋</option>
          <option value="exp" >-</option>
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