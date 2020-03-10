import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';
import history from "../../history";
import SignupForm from "../signupForm";
import signupFormValidator from "../../helpers/signupFormValidator";

class CustomerSignup extends Component {
   constructor(props) {
     super(props);
     this.state = {
       name: '',
       email: '',
       password: '',
       passwordConfirmation: '',
       errorMessages: {
         name: '', email: '', password: '', passwordConfirmation: '',
       },
       valid: false
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
     this.setState(signupFormValidator);
     if (this.validForm) {
       this.props.actions.signup('customers', user)
         .then(() => {
           history.push('/')
         })
     }
   }

   get validForm() {
     return signupFormValidator(this.state).valid
   }

   render() {
     const {
       name, email, password, passwordConfirmation, errorMessages
     } = this.state;
     return (
      <SignupForm
        name={name}
        email={email}
        password={password}
        passwordConfirmation={passwordConfirmation}
        errorMessages={errorMessages}
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
