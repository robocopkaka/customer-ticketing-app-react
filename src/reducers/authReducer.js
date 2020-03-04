import update from 'immutability-helper';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  let newState = {};
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('reducer works')
      newState = update(state, {
        authenticated: {  $set: true },
        currentUser: { $set: action.user },
        message: { $set: 'Signed up successfully' }
      });
      return newState;
    default:
      return state;
  }
}
