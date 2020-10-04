import React, { useContext } from 'react'
import { auth } from "../firebase/Firebase";
import { AuthContext } from '../auth/AuthProvider';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SignOutButton = styled(Button)({
  background: '#C1C1C1',
  fontSize: '1.0rem',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 30,
  padding: '0 10px',
  margin: '0 0 0 auto',
  display: 'block',
  '&:hover': {
    backgroundColor: '#B4B4B4',
  },
});

export const Header = ({date, setPrevMonth, setNextMonth}) => {

  const { currentUser } = useContext(AuthContext)

  const today = date;
  const year = today.getFullYear();
  const month = today.getMonth()+1;

  return (
    <div className="head">
      <SignOutButton onClick={() => auth.signOut()}>Sign Out</SignOutButton>
      <div className="showMonth">
        <button onClick={() => setPrevMonth()}>←前月 </button>
        <h1>{year}年{month}月</h1>
        <button onClick={() => setNextMonth()}> 次月→</button>
      </div>
    </div>
  )
}

