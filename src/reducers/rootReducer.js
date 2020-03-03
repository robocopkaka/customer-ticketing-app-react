import { combineReducers } from 'redux';
import customerAuth from './customerAuthReducer';

const rootReducer = combineReducers({
  customerAuth
});

export default rootReducer;
