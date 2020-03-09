import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/requestActions"
import RequestDescription from "./requestDescription";
import "./stylesheets/single-request.scss";
import RequestComments from "./support_requests/requestComments";

class SingleRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.actions.fetchOne(id)
  }

  render() {
    const { request } = this.props;
    const { props: { match: { params: { id } }} } = this;
    return (
      <Fragment>
        <div id="request-description-section">
          <div id="description">
            <RequestDescription request={request} />
          </div>
          <div id="comments">
            <RequestComments id={id} />
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
