import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as customerAuthActions from '../../actions/authActions';
import LoginForm from "../loginForm";
import history from "../../history";

class SupportAgentLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
    const customer = { auth: { email, password } };
    this.props.actions.login('support_agents', customer)
      .then(() => {
        history.push('/')
      });
  }

  render() {
    return (
      <LoginForm
        login={this.login}
        email={this.email}
        password={this.password}
        handleChange={this.handleChange}
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
