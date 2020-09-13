import React, { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";

const AuthContext = React.createContext() 

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);




  //サインアップ後認証情報を更新
  const signup = async (email, password, history) => {
    try { 
      await auth.createUserWithEmailAndPassword(email, password);
      auth.onAuthStateChanged(user => setCurrentUser(user));
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  //ログインさせる
  const login = async (email, password, history) => {
    try {
      await auth.signInWithEmailAndPassword(email,password);
      auth.onAuthStateChanged(user => setCurrentUser(user));
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }

  //初回アクセス時に認証済みかチェック
  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ signup, login, currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}