import AuthApi from "../api/authApi";

export function signupSuccess(data) {
  return { type: 'SIGNUP_SUCCESS', data }
}

export function loginSuccess() {
  return { type: 'LOGIN_SUCCESS' }
}

export function loginFailure(message) {
  return { type: 'LOGIN_FAILURE', message }
}

export function signupFailure(message) {
  return { type: 'SIGNUP_FAILURE', message }
}

export function logoutSuccess() {
  return { type: 'LOGOUT_SUCCESS' }
}

export function login(type, user) {
  return (dispatch) => {
    return AuthApi.login(type, user)
      .then((response) => {
        const { data: { session } } = response;
        localStorage.setItem('sessionId', session.id);
        localStorage.setItem('userId', session.user_id);
        localStorage.setItem('userType', session.role);
        localStorage.setItem('isLoggedIn', session.active);
        localStorage.setItem('expiresAt', session.expires_at);
        dispatch(loginSuccess());
      })
      .catch((error) => {
        if (error.response === undefined ) {
          localStorage.setItem('isLoggedIn', false);
          dispatch(loginFailure(error.message));
          return
        }
        const { data: { message } } = error.response;
        localStorage.setItem('isLoggedIn', false);
        dispatch(loginFailure(message));
      })
  }
}

export function signup(type, user) {
  return (dispatch) => {
    return AuthApi.signup(type, user)
      .then((response) => {
        const { data: { user }, extra } = response;
        localStorage.setItem('sessionId', extra.session_id);
        localStorage.setItem('userId', user.id);
        localStorage.setItem('userType', user.role);
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('expiresAt', extra.expires_at);
        dispatch(signupSuccess(user));
      })
      .catch((error) => {
        if (error.response === undefined ) {
          localStorage.setItem('isLoggedIn', false);
          dispatch(signupFailure(error.message));
          return
        }
        const { data: { errors } } = error.response;
        let message = '';
        Object.entries(errors[0]).forEach(([key, value]) => {
          message += `${key} ${value[0]} \n`;
        })
        localStorage.setItem('isLoggedIn', false);
        dispatch(signupFailure(message));
        throw error;
      })
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logoutSuccess());
  }
}
