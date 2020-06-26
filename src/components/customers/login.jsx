import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as customerAuthActions from '../../actions/authActions';
import LoginForm from "../loginForm";
import loginFormValidator from "../../helpers/loginValidator";

class CustomerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessages: {
        password: '', email: ''
      },
      valid: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  login(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const customer = { email, password };
    this.setState(loginFormValidator);
    if (this.validForm) {
      this.props.actions.login('customers', customer)
    }
  }

  get validForm() {
    return loginFormValidator(this.state).valid;
  }

  render() {
    const { email, password, errorMessages } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.props.authenticated) {
      return <Redirect to={from} />
    }
    return (
      <LoginForm
        login={this.login}
        email={email}
        password={password}
        handleChange={this.handleChange}
        errorMessages={errorMessages}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerAuthActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CustomerLogin);