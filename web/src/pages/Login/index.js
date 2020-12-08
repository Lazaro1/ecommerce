import React from 'react'
import './styles.css';

function Login() {
  return (
    <div className="login-container">
    <div class="login-section">
      <h1>Enter with your user</h1>

      <div class="login-form">
        <form action="">
          <div class="login-input">
            <label >Email</label>
            <input />
          </div>
          <div class="login-input">
            <label >Password</label>
            <input />
          </div>
          <button type="submit" class="btn-login">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;

