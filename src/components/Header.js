import React, { useContext } from 'react'
import { auth } from "../firebase/Firebase";
import { AuthContext } from '../auth/AuthProvider';

export const Header = () => {

  const { currentUser } = useContext(AuthContext)

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;

  return (
    <div>
      <button className="logout-btn"onClick={() => auth.signOut()}>Sign Out</button>
      <h1>{year}年{month}月</h1>
    </div>
  )
}
