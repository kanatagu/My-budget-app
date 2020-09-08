import React from 'react';

export const AddItem = ({ addIncome, inputText, setInputText, inputAmount, setInputAmount, incomeItems, setIncomeItems, expenseItems, setExpenseItems, type, setType}) => {


  const typeHandler = (e) => {
    setType(e.target.value)
    console.log(type)
  }

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    console.log(inputText)
  };

  const inputAmountHandler = (e) => {
    setInputAmount(parseInt(e.target.value))
    console.log(inputAmount)
  }

  const submitItemHandler = (e) => {
    e.preventDefault();
    if ( type === 'inc' ) {
      setIncomeItems([
      ...incomeItems, {text: inputText, amount: inputAmount, id: Math.random() * 1000 }
      ]);

      addIncome(inputText, inputAmount)

    } else if ( type === 'exp' ) {
      setExpenseItems([
        ...expenseItems, {text: inputText, amount:inputAmount, id: Math.random() * 1000 }
      ]);
    }
    console.log(incomeItems)
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
