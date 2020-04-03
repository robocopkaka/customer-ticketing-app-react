import decode from 'jwt-decode';
import AuthApi from "../api/authApi";

export function signupSuccess(data) {
  return { type: 'SIGNUP_SUCCESS', data }
}

export function loginSuccess(data) {
  return { type: 'LOGIN_SUCCESS', data }
}

export function loginFailure() {
  return { type: 'LOGIN_FAILURE' }
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
        const decodedToken = decode(response.jwt);
        const { sub } = decodedToken;
        localStorage.setItem('token', response.jwt);
        localStorage.setItem('userId', sub);
        localStorage.setItem('userType', sub.substr(0, 4))
        localStorage.setItem('isLoggedIn', true);
        dispatch(loginSuccess(user));
      })
      .catch(() => {
        localStorage.setItem('isLoggedIn', false);
        dispatch(loginFailure());
      })
  }
}

export function signup(type, user) {
  return (dispatch) => {
    return AuthApi.signup(type, user)
      .then((response) => {
        const decodedToken = decode(response.extra.jwt);
        const { sub } = decodedToken;
        localStorage.setItem('token', response.jwt);
        localStorage.setItem('userId', sub);
        localStorage.setItem('userType', sub.substr(0, 4))
        localStorage.setItem('isLoggedIn', true);
        dispatch(signupSuccess(user));
      })
      .catch(() => {
        localStorage.setItem('isLoggedIn', false);
        dispatch(signupFailure());
      })
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userType');
    localStorage.setItem('isLoggedIn', false);
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
