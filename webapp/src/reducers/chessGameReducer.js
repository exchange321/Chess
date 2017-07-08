/**
 * Created by chuen on 08-Jul-17.
 */
import initialState from './initialState';
import { CHESS_GAME_ACTIONS } from '../actions/actionTypes';

const chessGameReducer = (state = initialState.chessGamePage, action) => {
  switch (action.type) {
    case CHESS_GAME_ACTIONS.REGISTER_MOVES: {
      return {
        ...state,
        moves: action.moves,
// eslint-disable-next-line no-nested-ternary
        activePiece: state.activePiece === null ? action.activePiece :
          (state.activePiece.id === action.activePiece.id ? null : action.activePiece),
        showMoves: !(state.activePiece && action.activePiece.id === state.activePiece.id),
      };
    }
    default: {
      return state;
    }
  }
};

export default chessGameReducer;
