import React, { useContext } from 'react'
import { auth } from "../firebase/Firebase";
import { AuthContext } from '../auth/AuthProvider';

export const Header = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div className="header-form">
      <button className="logout-btn"onClick={() => auth.signOut()}>ログアウト</button>
      <h1 className="title">2020年9月</h1>
    </div>
  )
}
