import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import roomListReducer from './roomListReducer';
import roomDetailReducer from './roomDetailReducer';
import chessGamePage from './chessGameReducer';

const rootReducer = combineReducers(
  {
    loginPage: loginReducer,
    roomListPage: roomListReducer,
    roomDetailPage: roomDetailReducer,
    chessGamePage,
  },
);

export default rootReducer;
