import React from "react";
import './stylesheets/login-form.scss';

const LoginForm = ({ email, password, login, handleChange }) => (
  <div className="input-forms">
    <form onSubmit={login} id="login-form">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email" name="email"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          type="password"
          name="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="button-group">
        <button className="btn" type="submit">Login</button>
      </div>
    </form>
  </div>
);

export default LoginForm;