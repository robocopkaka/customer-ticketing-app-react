import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';
import history from "../../history";
import SignupForm from "../signupForm";

class CustomerSignup extends Component {
   constructor(props) {
     super(props);
     this.state = {
       name: '',
       email: '',
       password: '',
       passwordConfirmation: '',
     };
     this.handleChange = this.handleChange.bind(this);
     this.signup = this.signup.bind(this);
   }

   handleChange(event) {
     const { name, value } = event.target;
     this.setState({
       [name]: value
     })
   }

   signup(event) {
     event.preventDefault();
     const {
       name, email, phoneNumber, password, passwordConfirmation
     } = this.state;
     const user = {
       name, email, password,
       phone_number: phoneNumber,
       password_confirmation: passwordConfirmation
     };
     this.props.actions.signup('customers', user)
       .then(() => {
         history.push('/')
       })
   }

   render() {
     const { name, email, password, passwordConfirmation } = this.state;
     return (
      <SignupForm
        name={name}
        email={email}
        password={password}
        passwordConfirmation={passwordConfirmation}
        handleChange={this.handleChange}
        signup={this.signup}
      />
     );
   }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CustomerSignup);
