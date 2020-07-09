import axios from './defaultConfig';

class SessionApi {
  static fetchSession(id) {
    return axios.get(`/fetch_session`, {
      headers: {
        'session_id': `${localStorage.getItem('sessionId')}`
      }
    })
      .then(response => response.data)
      .catch((error) => {
        throw error
      });
  }
}
export default SessionApi;
