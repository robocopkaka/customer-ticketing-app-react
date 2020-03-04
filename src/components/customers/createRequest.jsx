import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import RequestForm from "./requestForm";
import * as actions from "../../actions/requestActions";
import history from "../../history";
import '../stylesheets/create-request.scss';

class CreateRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.create = this.create.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  create(event) {
    event.preventDefault();
    const { subject, description } = this.state;
    const request = { subject, description };
    this.props.actions.create(request)
      .then(() => {
        history.push('/');
      })
  }

  render() {
    const { subject, description } = this.state;
    return (
      <RequestForm
        subject={subject}
        description={description}
        handleChange={this.handleChange}
        create={this.create}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CreateRequest);
