import axios from'./defaultConfig';

class SupportAgentApi {
  static fetchAgents() {
    return axios.get(`/support_agents`, {
      headers: {
        'Content-Type': 'application/json',
        'session_id': `${localStorage.sessionId}`
      }
    })
      .then(response => response.data);
  }

  static assignRequest(agentId, reqId) {
    return axios.patch(`/support_requests/${reqId}/assign`, { assignee_id: agentId }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.data);
  }
}

export default SupportAgentApi;
