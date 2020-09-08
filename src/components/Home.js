import React, { useState, useContext, useEffect } from 'react';
import { auth, db } from "../firebase/Firebase";
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
  }, []);

  // useEffect (() => {
  //   addIncomeItem();
  // }, [incomeItems]);

  
  // const getIncomeData = () => {
  //   const col = db.collection('incomeItems')
  //   return col.where('uid', '==', currentUser.uid).onSnapshot(query => {
  //     const incomeData = []
  //     query.forEach(doc => doc.push({...doc.incomeData(), docId: doc.id}))
  //     setIncomeItems(incomeData);
  //   })
  // }

  const col = db.collection('incomeItems')

  const getIncomeData = () => {
    col.where('uid', '==', currentUser.uid).onSnapshot(query => {
      const incomeItems = []
      query.forEach(doc => incomeItems.push({...doc.data(), docId: doc.id}))
      setIncomeItems(incomeItems);
    })
  }

  const addIncome = (text, amount) => {
    db.collection('incomeItems').add({
      uid: currentUser.uid,
      text,
      amount,
    })
  }

  const deleteIncome = ({ docId }) => {
    db.collection('incomeItems').doc(docId).delete()
  }

  return (
    <div>
      <Header />
      <div className="container">
        <Balance 
          incomeItems={incomeItems}
          expenseItems={expenseItems}
        />
        <IncomeExpense 
          incomeItems={incomeItems}
          expenseItems={expenseItems}
          deleteIncome={deleteIncome}
        />
        <AddItem
          addIncome={addIncome}
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
      </div>
      <button className="logout-btn"onClick={() => auth.signOut()}>log out</button>
    </div>
  )
}

export default Home;