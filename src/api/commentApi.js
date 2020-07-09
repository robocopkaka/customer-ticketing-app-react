import axios from './defaultConfig';

class CommentApi {
  static create(id, body) {
    return axios.post(`/support_requests/${id}/comments`, body, {
      headers: {
        'session_id': `${localStorage.getItem('sessionId')}`
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
        'session_id': `${localStorage.getItem('sessionId')}`
      }
    })
      .then(response => response.data)
  }
}

export default CommentApi;
