import update from 'immutability-helper';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  let newState = {};
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      newState = update(state, {
        authenticated: {  $set: true },
        message: { $set: 'Logged in successfully' }
      });
      return newState;
    case 'LOGIN_FAILURE':
      newState = update(state, {
        authenticated: {  $set: false },
        message: { $set: action.message }
      });
      return newState;
    case 'SIGNUP_SUCCESS':
      newState = update(state, {
        authenticated: { $set: true },
        message: { $set: 'Signed up successfully' }
      });
      return newState;
    case 'SIGNUP_FAILURE':
      newState = update(state, {
        authenticated: {  $set: false },
        message: { $set: action.message }
      });
      return newState;
    case 'LOGOUT_SUCCESS':
      newState = update(state, {
        authenticated: { $set: false }
      });
      return newState;
    default:
      return state;
  }
}
