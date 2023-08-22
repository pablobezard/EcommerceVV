import React from 'react';
import './RegisterForm.css';
import registerImage from '../../image/general/cart.jpg'; // Cambia la ruta a la imagen de registro

function RegisterForm() {
  return (
    <div className="register-container">
      <div className="register-image">
        <img src={registerImage} alt="Register" />
      </div>
      <div className="register-form">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;