import React, {useState} from 'react';
import { app } from "../firebase/Firebase";
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpense } from './IncomeExpense';
import { AddItem } from './AddItem';
import { ItemsList } from './ItemsList';

function Home (props) {

  const [inputText, setInputText] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  const [items, setItems] = useState([]);

  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpense />
      <AddItem
        inputText={inputText}
        setInputText={setInputText}
        inputAmount={inputAmount}
        setInputAmount={setInputAmount}
        items={items}
        setItems={setItems}
      />
      <ItemsList items={items} setItems={setItems} />
      <button onClick={() => app.auth().signOut()}>log out</button>
    </div>
  )
}

export default Home;



