import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import chessGamePage from './chessGameReducer';
import lobbyReducer from './lobbyReducer';
import roomReducer from './roomReducer';

const rootReducer = combineReducers(
  {
    loginPage: loginReducer,
    chessGamePage,
    lobbyPage: lobbyReducer,
    roomPage: roomReducer,
  },
);

export default rootReducer;
