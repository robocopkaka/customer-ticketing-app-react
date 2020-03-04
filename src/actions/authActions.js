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

export function login(type, user) {
  return (dispatch) => {
    return AuthApi.login(type, user)
      .then((response) => {
        const decodedToken = decode(response.jwt);
        const { sub } = decodedToken;
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
        const decodedToken = decode(response.message.jwt);
        const { sub } = decodedToken;
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
