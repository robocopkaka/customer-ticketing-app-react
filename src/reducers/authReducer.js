import update from 'immutability-helper';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  let newState = {};
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      newState = update(state, {
        authenticated: {  $set: true },
        currentUser: { $set: action.data },
        message: { $set: 'Logged in successfully' }
      });
      return newState;
    case 'LOGIN_FAILURE':
      newState = update(state, {
        authenticated: {  $set: false },
        message: { $set: 'Login failed' }
      });
      return newState;
    case 'SIGNUP_SUCCESS':
      newState = update(state, {
        authenticated: { $set: true },
        currentUser: { $set: action.data },
        message: { $set: 'Logged in successfully' }
      });
      return newState;
    case 'SIGNUP_FAILURE':
      newState = update(state, {
        authenticated: {  $set: false },
        message: { $set: 'Signup failed' }
      });
      return newState;
    default:
      return state;
  }
}