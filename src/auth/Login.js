import React, { useContext } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import { AuthContext } from "./AuthProvider";
import "firebase/auth";
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SignInButton = styled(Button)({
  background: '#6fc4f9',
  fontSize: '1.8rem',
  border: 0,
  borderRadius: 3,
  color: 'white',
  padding: '10px 40px',
  margin: '0 auto',
  '&:hover': {
    backgroundColor: '#57baf8',
  },
});


const Login = ({ history }) => {
  const { login } = useContext(AuthContext);
  //AuthContextからlogin関数を受け取る

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    login(email.value, password.value, history);
  };

  return (
    <div className="auth-container">
      <h1>Sign In</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-form-item">
          <label className="auth-label">E-mail Address</label>
          <input className="auth-input" name="email" type="email" placeholder="email@gmail.com" />
        </div>
        <div className="auth-form-item">
          <label className="auth-label">Password</label>
          <input className="auth-input" name="password" type="password" placeholder="Password"/>
        </div>
        <div className="btn-panel">
          <SignInButton type="submit">SIGN IN</SignInButton>
        </div>
      </form>
      <Link to="/signup" className="forSignup-in" >SignUpはこちら</Link>
    </div>
  );
};

export default withRouter(Login);