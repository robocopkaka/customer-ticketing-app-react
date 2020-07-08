import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as customerAuthActions from '../../actions/authActions';
import LoginForm from "../loginForm";
import history from "../../history";
import loginFormValidator from "../../helpers/loginValidator";

class SupportAgentLogin extends Component {
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
    this.login = this.login.bind(this)
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
      this.props.actions.login('support_agents', customer)
        .then(() => {
          history.push('/')
        });
    }
  }

  get validForm() {
    return loginFormValidator(this.state).valid;
  }

  render() {
    const { email, password, errorMessages } = this.state;
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

export default connect(null, mapDispatchToProps)(SupportAgentLogin);
