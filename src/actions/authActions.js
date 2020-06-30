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

export function signupFailure() {
  return { type: 'SIGNUP_FAILURE' }
}

export function logoutSuccess() {
  return { type: 'LOGOUT_SUCCESS' }
}

export function userLoggedIn(status) {
  return { type: 'USER_LOGGED_IN', status }
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
        console.log(error.response)
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
        console.log(response)
        const { data: { user } } = response;
        localStorage.setItem('sessionId', user.session.id);
        localStorage.setItem('userId', user.session.user_id);
        localStorage.setItem('userType', user.session.role);
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('expiresAt', user.session.expires_at);
        dispatch(signupSuccess(user));
      })
      .catch((error) => {
        const errors = {};
        console.log(error.response)
        // const { data: { errors } } = error.response;
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
    localStorage.removeItem('sessionId');
    localStorage.removeItem('userId');
    localStorage.removeItem('userType');
    localStorage.removeItem('isLoggedIn');
    dispatch(logoutSuccess());
  }
}

export function loggedIn() {
    return (dispatch) => {
      const loggedIn = localStorage.getItem('loggedIn');
      console.log(loggedIn)
      dispatch(userLoggedIn(loggedIn))
    }
}
