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
        message: { $set: action.message }
      });
      return newState;
    case 'FETCH_REQUESTS_SUCCESS':
      newState = update(state, {
        requests: { $set: action.data.data.support_requests },
        extra: { $set: action.data.extra }
      });
      return newState;
    case 'FETCH_ONE_REQUEST_SUCCESS':
      newState = update(state, {
        request: { $set: action.data.support_request },
      });
      return newState;
    case 'FETCH_ONE_REQUEST_FAILURE':
      newState = update(state, {
        message: { $set: 'Request not found' },
      });
      return newState;
    default:
      return state;
  }
}