import axios from './defaultConfig';

class CommentApi {
  static create(id, body) {
    return axios.post(`/support_requests/${id}/comments`, body, {
      headers: {
        'Content-Type': 'application/json',
        'session_id': `${localStorage.sessionId}`
      }
    })
      .then(response => response.data)
      .catch((error) => {
        throw error;
      })
  }

  static fetchComments(id) {
    return axios.get(`/support_requests/${id}/comments`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.data)
  }
}

export default CommentApi;
