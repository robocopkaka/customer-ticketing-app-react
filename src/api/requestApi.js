import axios from "./defaultConfig";

class RequestApi {
  static create(request) {
    return axios.post('/support_requests', request, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.data)
      .catch((error) => {
        throw error;
      })
  }

  static fetchRequests(type, query) {
    return axios.get(`/${type}/${localStorage.userId}/support_requests?query=${query || ""}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.data);
  }

  static fetchOne(id) {
    return axios.get(`/support_requests/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default RequestApi;
