import axios from 'axios';

class RequestApi {
  static create(request) {
    return axios.post(`http://localhost:3001/support_requests`, request, {
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
    return axios.get(`http://localhost:3001/${type}/${localStorage.userId}/support_requests?query=${query || ""}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.data);
  }
}

export default RequestApi;
