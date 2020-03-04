import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as customerAuthActions from '../../actions/authActions';
import LoginForm from "../loginForm";
import history from "../../history";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
    const user = { auth: { email, password } };
    this.props.actions.login('admins', user)
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

export default connect(null, mapDispatchToProps)(AdminLogin);
