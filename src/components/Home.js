import React, {useState, useEffect} from 'react';
import { app } from "../firebase/Firebase";
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpense } from './IncomeExpense';
import { AddItem } from './AddItem';
import { ItemsList } from './ItemsList';

function Home (props) {

  const [inputText, setInputText] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  const [incomeItems, setIncomeItems] = useState([]);
  const [expenseItems, setExpenseItems] = useState([]);
  const [type, setType] = useState("inc");

// //Run ONCE when the app start
//   useEffect(() => {
//     getLocalItems();
//   }, [incomeItems]);

//   useEffect(() => {
//     saveLocalItems();
//   }, [incomeItems,])

//   //save to local
//   const saveLocalItems = () => {
//     localStorage.setData("incomeItems", JSON.stringify(incomeItems));

//   const getLocalItems = () => {
//     if (localStorage.getData("incomeItems") === null ) {
//       localStorage.setData("incomeItems", JSON.stringify([]))
//     } else {
//       let itemLocal = JSON.parse(localStorage.getData("incomeItems"))
//       setData(itemLocal);
//     }
//   };



  return (
    <div>
      <Header />
      <Balance 
        incomeItems={incomeItems}
        expenseItems={expenseItems}
      />
      <IncomeExpense 
        incomeItems={incomeItems}
        expenseItems={expenseItems}
      />
      <AddItem
        inputText={inputText}
        setInputText={setInputText}
        inputAmount={inputAmount}
        setInputAmount={setInputAmount}
        incomeItems={incomeItems}
        setIncomeItems={setIncomeItems}
        expenseItems={expenseItems}
        setExpenseItems={setExpenseItems}
        type={type}
        setType={setType}
      />
      <ItemsList 
        incomeItems={incomeItems} 
        setIncomeItems={setIncomeItems} 
        expenseItems={expenseItems}
        setExpenseItems={setExpenseItems}
      />
      <button onClick={() => app.auth().signOut()}>log out</button>
    </div>
  )
}

export default Home;