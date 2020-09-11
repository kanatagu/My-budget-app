import React, { useContext } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import { AuthContext } from "./AuthProvider";
import "firebase/auth";

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
          <label className="auth-label" for="email">E-mail Address</label>
          <input className="auth-input" name="email" type="email" placeholder="email@gmail.com" />
        </div>
        <div className="auth-form-item">
          <label className="auth-label" for="password">Password</label>
          <input className="auth-input" name="password" type="password" placeholder="Password"/>
        </div>
        <div className="btn-panel">
          <button className="auth-btn" type="submit">SIGN IN</button>
        </div>
      </form>
      <Link to="/signup" className="forSignup" >SignUpはこちら</Link>
    </div>
  );
};

export default withRouter(Login);