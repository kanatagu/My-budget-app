import React, { useState, useContext, useEffect } from 'react';
import { db } from "../firebase/Firebase";
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpense } from './IncomeExpense';
import { AddItem } from './AddItem';
import { ItemsList } from './ItemsList';
import { AuthContext } from '../auth/AuthProvider';

function Home (props) {

  const [inputText, setInputText] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  const [incomeItems, setIncomeItems] = useState([]);
  const [expenseItems, setExpenseItems] = useState([]);
  const [type, setType] = useState("inc")

  const { currentUser } = useContext(AuthContext)

  useEffect (() => {
    getIncomeData();
    getExpenseData();
  }, []);

  const getIncomeData = () => {
    const incomeData = db.collection('incomeItems')
    incomeData.where('uid', '==', currentUser.uid).onSnapshot(query => {
      const incomeItems = []
      query.forEach(doc => incomeItems.push({...doc.data(), docId: doc.id}))
      setIncomeItems(incomeItems);
    })
  }


  const addIncome = (text, amount) => {
    
    let len = incomeItems.length;
    for (let i =0; i < len; i++) {
      console.log(i.toLocaleString())
    }

    const docId = Math.random().toString(32).substring(2);
    db.collection('incomeItems').doc(docId).set({
      uid: currentUser.uid,
      text,
      amount,
    })
    .then(response => {
      setIncomeItems([
        ...incomeItems, {text: inputText, amount: inputAmount, docId: docId}
      ]); //docIDを追加
    })
  }
  console.log(incomeItems)
  
  const deleteIncome = (docId) => {
    db.collection('incomeItems').doc(docId).delete()
  }

  const getExpenseData = () => {
    const expenseData = db.collection('expenseItems')
    expenseData.where('uid', '==', currentUser.uid).onSnapshot(query => {
      const expenseItems = []
      query.forEach(doc => expenseItems.push({...doc.data(), docId: doc.id}))
      setExpenseItems(expenseItems);
    })
  }

  const addExpense = (text, amount) => {
    const docId = Math.random().toString(32).substring(2);
    db.collection('expenseItems').doc(docId).set({
      uid: currentUser.uid,
      text,
      amount,
    })
    .then(response => {
      setExpenseItems([
        ...expenseItems, {text: inputText, amount:inputAmount, docId: docId }
      ]); //docIdを追加
    })
  }
  console.log(expenseItems)



  const deleteExpense = (docId) => {
    db.collection('expenseItems').doc(docId).delete()
  }

  return (
    <>
      <Header />
      <div className="container">
        <Balance 
          incomeItems={incomeItems}
          expenseItems={expenseItems}
        />
        <IncomeExpense 
          incomeItems={incomeItems}
          expenseItems={expenseItems}
        />
        <AddItem
          addIncome={addIncome}
          addExpense={addExpense}
          inputText={inputText}
          setInputText={setInputText}
          inputAmount={inputAmount}
          setInputAmount={setInputAmount}
          type={type}
          setType={setType}
        />
        <ItemsList 
          deleteIncome={deleteIncome}
          deleteExpense={deleteExpense}
          incomeItems={incomeItems} 
          expenseItems={expenseItems}
        />
      </div>
    </>
  )
}

export default Home;
