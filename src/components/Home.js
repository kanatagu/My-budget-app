import React from "react";
import { app } from "../firebase/Firebase";
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpense } from './IncomeExpense';
import { AddItem } from './AddItem';
import { ItemsList } from './ItemsList';

function Home(props) {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpense />
      <AddItem />
      <ItemsList />
      <button onClick={() => app.auth().signOut()}>log out</button>
    </div>
  )
}

export default Home;



