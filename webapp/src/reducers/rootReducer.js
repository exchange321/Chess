import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import lobbyReducer from './lobbyReducer';
import roomReducer from './roomReducer';

const rootReducer = combineReducers(
  {
    loginPage: loginReducer,
    roomListPage: lobbyReducer,
    roomPage: roomReducer,
  },
);

export default rootReducer;
