import { combineReducers } from 'redux';
import auth from './authReducer';
import request from './requestReducer';

const rootReducer = combineReducers({
  auth,
  request
});

export default rootReducer;
