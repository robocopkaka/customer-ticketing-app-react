import React from "react";
import classNames from 'classnames';
import './stylesheets/login-form.scss';

const LoginForm = ({ email, password, login, handleChange, errorMessages }) => {
  const emailClasses = classNames('form-control', { 'is-invalid': errorMessages.email.length > 0 });
  const passwordClasses = classNames('form-control', { 'is-invalid': errorMessages.password.length > 0 });
  const emailError = classNames('invalid-feedback', { 'display-none': errorMessages.email.length > 0 });
  const passwordError = classNames('invalid-feedback', { 'display-none': errorMessages.password.length > 0 });
  return (
    <div className="input-forms">
      <form onSubmit={login} id="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email" name="email"
            className={emailClasses}
            onChange={handleChange}
          />
          <p className={emailError}>{errorMessages.email}</p>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            value={password}
            type="password"
            name="password"
            className={passwordClasses}
            onChange={handleChange}
          />
          <p className={passwordError}>{errorMessages.password}</p>
        </div>

        <div className="button-group">
          <button className="btn" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;