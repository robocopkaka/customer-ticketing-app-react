import { combineReducers } from 'redux';
import auth from './authReducer';
import request from './requestReducer';
import comment from './commentReducer';

const rootReducer = combineReducers({
  auth,
  request,
  comment
});

export default rootReducer;
