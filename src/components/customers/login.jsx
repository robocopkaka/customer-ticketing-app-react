import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as customerAuthActions from '../../actions/authActions';
import LoginForm from "../loginForm";

class CustomerLogin extends Component {
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
    const customer = { auth: { email, password } };
    this.props.actions.login('customers', customer)
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.props.authenticated) {
      return <Redirect to={from} />
    }
    return (
      <LoginForm login={this.login} email={this.email} password={this.password} handleChange={this.handleChange} />
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