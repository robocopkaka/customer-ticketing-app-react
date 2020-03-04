import update  from 'immutability-helper';
import initialState from "./initialState";

export default function requestReducer(state=initialState.request, action) {
  let newState = {};
  switch(action.type) {
    case 'CREATE_REQUEST_SUCCESS':
      newState = update(state, {
        subject: { $set: action.data.subject },
        description: { $set: action.data.description },
        message: { $set: 'Request created successfully' },
      });
      return newState;
    case 'CREATE_REQUEST_FAILURE':
      newState = update(state, {
        message: { $set: 'Request creation failed' }
      });
      return newState;
    default:
      return state;
  }
}