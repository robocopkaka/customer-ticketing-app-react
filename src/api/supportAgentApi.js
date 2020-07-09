import axios from'./defaultConfig';

class SupportAgentApi {
  static fetchAgents() {
    return axios.get(`/support_agents`, {
      headers: {
        'session_id': `${localStorage.getItem('sessionId')}`
      }
    })
      .then(response => response.data);
  }

  static assignRequest(agentId, reqId) {
    return axios.patch(`/support_requests/${reqId}/assign`, { assignee_id: agentId }, {
      headers: {
        'session_id': `${localStorage.getItem('sessionId')}`
      }
    })
      .then(response => response.data);
  }
}

export default SupportAgentApi;
