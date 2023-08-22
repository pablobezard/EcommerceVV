import React from 'react';
import './LoginForm.css';
import loginImage from '../../image/general/camera.jpg'

function LoginForm() {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-form-content">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </div>
        <div className="login-image">
          <img src={loginImage} alt="Login" />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
