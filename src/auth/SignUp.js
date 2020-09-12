import React, { useContext } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import { AuthContext } from "./AuthProvider";

const SignUp = ({ history }) => {
  const { signup } = useContext(AuthContext);
  //AuthContextからsignup関数を受け取る
  
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signup(email.value, password.value, history);
  };

  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
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
          <button className="signUp-btn" type="submit">SIGN UP</button>
        </div>
      </form>
      <Link to="/login" className="forSignup-in" >SignInへ戻る</Link>
    </div>
  );
};

export default withRouter(SignUp);