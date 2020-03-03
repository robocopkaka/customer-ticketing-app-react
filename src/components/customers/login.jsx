import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as customerAuthActions from '../../actions/customerAuthActions';
import LoginForm from "../login";

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
    console.log(value)
    this.setState({
      [name]: value
    })
  }

  login(event) {
    event.preventDefault();
    const { email, password } = this.state;
    console.log([email, password]);
    const customer = { auth: { email, password } };
    this.props.actions.login('customers', customer)
  }

  render() {
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


export default connect(null, mapDispatchToProps)(CustomerLogin);