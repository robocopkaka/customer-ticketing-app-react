import update from 'immutability-helper';
import initialState from './initialState';

export default function authReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case 'CUSTOMER_LOGIN_SUCCESS':
      console.log('reducer works')
      // newState = update(state, {
      //   authenticated: {  $set: true },
      //   currentUser: { $set: action.user },
      //   toastType: { $set: 'is-success' },
      //   message: { $set: 'Signed up successfully' }
      // });
      return state;
    default:
      return state;
  }
}
