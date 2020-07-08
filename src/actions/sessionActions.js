import SessionApi from "../api/sessionApi";

export function fetchSessionSuccess(data) {
  return { type: 'FETCH_SESSION_SUCCESS', data }
}

export function fetchSession() {
  return () => {
    return SessionApi.fetchSession()
      .then((response) => {
        const { data: { session } } = response;
        localStorage.setItem('sessionId', session.id);
        localStorage.setItem('userId', session.user_id);
        localStorage.setItem('userType', session.role);
        localStorage.setItem('isLoggedIn', session.active);
        localStorage.setItem('expiresAt', session.expires_at);
      })
      .catch((error) => {
        throw error;
      })
  }
}
