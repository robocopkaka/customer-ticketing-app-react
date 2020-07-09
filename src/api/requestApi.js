import axios from "./defaultConfig";

class RequestApi {
  static create(request) {
    return axios.post('/support_requests', request, {
      headers: {
        'session_id': `${localStorage.getItem('sessionId')}`
      }
    })
      .then(response => response.data)
      .catch((error) => {
        throw error;
      })
  }

  static fetchRequests(type, query) {
    console.log(axios.defaults)
    return axios.get(`/${type}/${localStorage.userId}/support_requests?query=${query || ""}`, {
      headers: {
        'session_id': `${localStorage.getItem('sessionId')}`
      }
    })
      .then(response => response.data);
  }

  static fetchOne(id) {
    return axios.get(`/support_requests/${id}`, {
      headers: {
        'session_id': `${localStorage.getItem('sessionId')}`
      }
    })
      .then(response => response.data)
      .catch((error) => {
        throw error;
      });
  }

  static resolve(id) {
    return axios.patch(`/support_requests/${id}/resolve`, {})
      .then(response => response.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default RequestApi;
