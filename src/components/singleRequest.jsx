import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/requestActions"
import RequestDescription from "./requestDescription";
import "./stylesheets/single-request.scss";
import RequestComments from "./support_requests/requestComments";
import AssignRequest from "./support_requests/assignRequest";

class SingleRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.resolveRequest = this.resolveRequest.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.actions.fetchOne(id)
  }

  resolveRequest(event) {
    event.preventDefault();
    this.props.actions.resolve(this.props.match.params.id)
    this.setState({ state: this.state });
  }

  render() {
    const { request } = this.props;
    const { props: { match: { params: { id } }} } = this;
    const userType = localStorage.getItem('userType');
    return (
      <Fragment>
        <div id="request-description-section">
          <div id="description">
            <RequestDescription
              request={request}
              resolveRequest={this.resolveRequest}
              userType={userType}
            />
            <div id="assign-request">
              <AssignRequest
                reqId={id}
              />
            </div>
          </div>

          <div id="comments">
            <RequestComments id={id} userType={userType} />
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    request: state.request.request
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRequest);
