import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import roomListReducer from './roomListReducer';

const rootReducer = combineReducers({
  loginPage: loginReducer,
  roomListPage: roomListReducer,
});

export default rootReducer;
