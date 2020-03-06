import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import qs from "query-string";
import * as actions from "../../actions/requestActions";
import RequestItem from "../requestItem";
import "../stylesheets/requests.scss";
import RequestsInfo from "../requestsInfo.jsx";

class SupportAgentRequests extends Component {
  constructor(props) {
    super(props);
    this.setColor = this.setColor.bind(this);
    this.fetchOpenRequests = this.fetchOpenRequests.bind(this);
    this.fetchClosedRequests = this.fetchClosedRequests.bind(this);
    this.fetchAllRequests = this.fetchAllRequests.bind(this);
    this.baseUrl = '/support-agents/requests';
    this.openOrAssigned = 'assigned'
  }
  componentDidMount() {
    const result = qs.parse((this.props.location.search));
    this.props.actions.fetchRequests('support_agents', result.query);
  }

  fetchOpenRequests() {
    this.props.actions.fetchRequests('support_agents', 'assigned');
  }

  fetchClosedRequests() {
    this.props.actions.fetchRequests('support_agents', 'closed');
  }

  fetchAllRequests() {
    this.props.actions.fetchRequests('support_agents')
  }

  setColor(status) {
    switch (status) {
      case 'Opened':
        return 'black';
      case 'Assigned':
        return 'blue';
      case 'Resolved':
        return 'green';
      default:
        return 'black';
    }
  }

  render() {
    const { requests, extra } = this.props;
    console.log(extra)
    return (
      <Fragment>
        <div id="all-requests">
          <div id="requests-info">
            <RequestsInfo
              closed={extra.closed}
              open={extra.open}
              fetchOpenRequests={this.fetchOpenRequests}
              fetchClosedRequests={this.fetchClosedRequests}
              fetchAssignedRequests={this.fetchAssignedRequests}
              fetchAllRequests={this.fetchAllRequests}
              baseUrl={this.baseUrl}
              openOrAssigned={this.openOrAssigned}
            />
          </div>
          <div id="request-list">
            { requests.length === 0 ? (
              <h2>No requests available</h2>
            ) : (
              requests.map((request) =>
                <RequestItem request={request} setColor={this.setColor} key={request.id}/>
              )
            )}
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    requests: state.request.requests,
    extra: state.request.extra
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SupportAgentRequests);
