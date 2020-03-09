import { combineReducers } from 'redux';
import auth from './authReducer';
import request from './requestReducer';
import comment from './commentReducer';
import supportAgent from './supportAgentReducer';

const rootReducer = combineReducers({
  auth,
  request,
  comment,
  supportAgent
});

export default rootReducer;
