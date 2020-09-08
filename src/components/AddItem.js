import React from 'react';

export const AddItem = ({ addIncome, addExpense, inputText, setInputText, inputAmount, setInputAmount, type, setType}) => {


  const typeHandler = (e) => {
    setType(e.target.value)
  }

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const inputAmountHandler = (e) => {
    setInputAmount(parseInt(e.target.value))
  }

  const submitItemHandler = (e) => {
    e.preventDefault();
    if ( type === 'inc' ) {
      addIncome(inputText, inputAmount) 

    } else if ( type === 'exp' ) {
      addExpense(inputText, inputAmount)
    }
  }

  return (
    <>
      <form >
        <select onChange={typeHandler}>
          <option value="inc">＋</option>
          <option value="exp" >-</option>
        </select>
        <div>
          <label>内容</label>
          <input type="text" value={inputText} onChange={inputTextHandler} />
        </div>
        <div>
          <label>金額</label>
          <input type="number" value={inputAmount} onChange={inputAmountHandler}/>円
        </div>
        <button className="add-btn" type="submit" onClick={submitItemHandler}>追加</button>
      </form>
    </>
  )

} 
