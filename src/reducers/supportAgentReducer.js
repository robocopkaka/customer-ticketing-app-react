import update from 'immutability-helper';
import initialState from './initialState';

export default function supportAgentReducer(state=initialState.supportAgent, action) {
  let newState = {};

  switch(action.type) {
    case 'FETCH_AGENTS_SUCCESS':
      newState = update(state, {
        supportAgents: { $set: action.data.support_agents },
      });
      return newState;
    case 'ASSIGN_REQUEST_SUCCESS':
      newState = update(state, {
        message: { $set: 'Successfully assigned to agent' },
      });
      return newState;
    default:
      return state;
  }
}