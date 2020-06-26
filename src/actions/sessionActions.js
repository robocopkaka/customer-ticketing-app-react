import SessionApi from "../api/sessionApi";

export function fetchSessionSuccess(data) {
  return { type: 'FETCH_SESSION_SUCCESS', data }
}

export function fetchSession() {
  return (dispatch) => {
    return SessionApi.fetchSession()
      .then((response) => {
        const { data: { session } } = response;
        console.log(session)
        localStorage.setItem('sessionId', session.id);
        localStorage.setItem('userId', session.user_id);
        localStorage.setItem('userType', session.role);
        localStorage.setItem('isLoggedIn', session.active);
        localStorage.setItem('expiresAt', session.expires_at);
      })
      .catch((error) => {
        console.log(error.response);
        localStorage.clear();
        throw error;
      })
  }
}