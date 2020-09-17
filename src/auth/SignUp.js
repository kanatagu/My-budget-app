import React, { useContext } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import { AuthContext } from "./AuthProvider";
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SignUpButton = styled(Button)({
  background: '#f16272',
  fontSize: '1.8rem',
  border: 0,
  borderRadius: 3,
  color: 'white',
  padding: '10px 40px',
  marginTop: '30px',
  '&:hover': {
    backgroundColor: '#ee3e52',
  },
});

const SignUp = ({ history }) => {
  const { signup } = useContext(AuthContext);
  //AuthContextからsignup関数を受け取る
  
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signup(email.value, password.value, history);
  };

  return (
    <div className="wrapper">
      <div className="auth-container">
        <h1>Sign Up</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form-item">
            <label>E-mail Address</label>
            <input name="email" type="email" placeholder="email@gmail.com" />
          </div>
          <div className="auth-form-item">
            <label>Password</label>
            <input name="password" type="password" placeholder="Password"/>
          </div>
            <SignUpButton className="signUp-btn" type="submit">SIGN UP</SignUpButton>
        </form>
        <Link to="/login" className="auth-bottom" >SignInへ戻る</Link>
      </div>
    </div>
  );
};

export default withRouter(SignUp);