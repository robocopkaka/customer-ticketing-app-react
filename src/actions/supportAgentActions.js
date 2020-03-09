import SupportAgentApi from "../api/supportAgentApi";

export function fetchAgentsSuccess(data)  {
  return { type: 'FETCH_AGENTS_SUCCESS', data }
}

export function assignRequestSuccess(data) {
  return { type: 'ASSIGN_REQUEST_SUCCESS', data }
}

export function fetchAgents() {
  return (dispatch) => {
    return SupportAgentApi.fetchAgents()
      .then((response) => {
        dispatch(fetchAgentsSuccess(response.data));
      });
  }
}

export function assignRequest(agentId, reqId) {
  return (dispatch) => {
    return SupportAgentApi.assignRequest(agentId, reqId)
      .then((response) => {
        dispatch(assignRequestSuccess(response.data))
      })
  }
}
