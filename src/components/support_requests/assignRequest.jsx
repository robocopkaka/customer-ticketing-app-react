import React, { Component }  from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import *  as actions from '../../actions/supportAgentActions';

class AssignRequest extends Component{
  constructor(props) {
    super(props);
    this.state = {
      agent: ''
    };
    this.assignRequest = this.assignRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.actions.fetchAgents()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.supportAgents !==  this.props.supportAgents) {
      this.setState({ agent: this.props.supportAgents[0].id })
    }
  }

  assignRequest(event) {
    event.preventDefault();
    const { agent } = this.state;
    const { reqId } = this.props;
    this.props.actions.assignRequest(agent,reqId)
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { supportAgents } = this.props;
    return (
      <div id="agents">
        <h3 id="header">Assign request</h3>
        <form onSubmit={this.assignRequest}>
          Agents:<br/>
          <select
            value={this.state.agent}
            onChange={this.handleChange}
            name="agent"
            className="custom-select"
          >
            {supportAgents.map((agent) => (
              <option value={agent.id} key={agent.id}>{agent.name}</option>
            ))}
          </select>
          <div className="button-group">
            <button className="btn" type="submit">Assign</button>
          </div>
        </form>
      </div>
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
    supportAgents: state.supportAgent.supportAgents
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignRequest);
