import React from "react";

const LoginForm = ({ email, password, login, handleChange }) => (
  <form onSubmit={login}>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input value={email} type="email" name="email" onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Password</label>
      <input value={password} type="password" name="password" onChange={handleChange} />
    </div>

    <div className="button-group">
      <button className="btn btn-primary" type="submit">Login</button>
    </div>
  </form>
);

export default LoginForm;