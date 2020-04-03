import React from "react";
import classNames from 'classnames';
import './stylesheets/signup-form.scss';

const SignupForm = ({
  name, email, password, passwordConfirmation, handleChange, signup, errorMessages
}) => {
  const nameClasses = classNames('form-control', { 'is-invalid': errorMessages.name.length > 0 });
  const passwordClasses = classNames('form-control', { 'is-invalid': errorMessages.password.length > 0 });
  const emailClasses = classNames('form-control', { 'is-invalid': errorMessages.email.length > 0 });
  const passwordConfirmationClasses = classNames('form-control', { 'is-invalid': errorMessages.passwordConfirmation.length > 0 });
  const nameError = classNames('invalid-feedback', { 'display-none': errorMessages.name.length > 0 });
  const passwordError = classNames('invalid-feedback', { 'display-none': errorMessages.password.length > 0 });
  const emailError = classNames('invalid-feedback', { 'display-none': errorMessages.email.length > 0 });
  const passwordConfirmationError = classNames('invalid-feedback', { 'display-none': errorMessages.passwordConfirmation.length > 0 });
  return (
    <div id="signup">
      <form onSubmit={signup} id="signup-form">
        <h2 id="signup-header">Signup</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            type="text" name="name"
            className={nameClasses}
            onChange={handleChange}
          />
          <p className={nameError}>{errorMessages.name}</p>
        </div>

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

        <div className="form-group">
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <input
            value={passwordConfirmation}
            type="password" name="passwordConfirmation"
            className={passwordConfirmationClasses}
            onChange={handleChange}
          />
          <p className={passwordConfirmationError}>{errorMessages.passwordConfirmation}</p>
        </div>

        <div className="button-group">
          <button className="btn" type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
