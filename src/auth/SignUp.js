import React, { useContext } from "react";
import { withRouter } from "react-router";
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
          <label className="auth-label" for="email">E-mail Address</label>
          <input className="auth-input" name="email" type="email" placeholder="email@gmail.com" />
        </div>
        <div className="auth-form-item">
          <label className="auth-label" for="password">Password</label>
          <input className="auth-input" name="password" type="password" placeholder="Password"/>
        </div>
        <div className="btn-panel">
          <button className="auth-btn" type="submit">SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUp);