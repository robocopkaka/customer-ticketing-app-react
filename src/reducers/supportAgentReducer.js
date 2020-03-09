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
    default:
      return state;
  }
}