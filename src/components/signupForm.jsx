import React from "react";
import './stylesheets/signup-form.scss';

const SignupForm = ({
  name, email, password, passwordConfirmation, handleChange, signup, phoneNumber
}) => (
  <div id="signup">
    <form onSubmit={signup} id="signup-form">
      <h2>Signup</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          value={name}
          type="text" name="name"
          className="form-control"
          onChange={handleChange}
        />
      </div>

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
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          value={phoneNumber}
          type="text" name="phoneNumber"
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

      <div className="form-group">
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input
          value={passwordConfirmation}
          type="password" name="passwordConfirmation"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="button-group">
        <button className="btn" type="submit">Signup</button>
      </div>
    </form>
  </div>
);

export default SignupForm;
