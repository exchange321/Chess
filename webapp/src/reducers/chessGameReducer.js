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
    case CHESS_GAME_ACTIONS.RESET_MOVES: {
      return {
        ...state,
        moves: initialState.chessGamePage.moves,
        activePiece: initialState.chessGamePage.activePiece,
        showMoves: false,
      };
    }
    case CHESS_GAME_ACTIONS.SWITCH_TURN: {
      return {
        ...state,
        turn: state.turn === 'white' ? 'black' : 'white',
      };
    }
    case CHESS_GAME_ACTIONS.REGISTER_VICTORY: {
      return {
        ...state,
        victorious: true,
        victoriousTeam: action.team,
      };
    }
    case CHESS_GAME_ACTIONS.REGISTER_CHESS_PIECES: {
      return {
        ...state,
        pieces: action.pieces,
      };
    }
    case CHESS_GAME_ACTIONS.REGISTER_PLAYERS: {
      return {
        ...state,
        ...action.players,
      };
    }
    case CHESS_GAME_ACTIONS.TOGGLE_LEAVING: {
      return {
        ...state,
        leaving: !state.leaving,
      };
    }
    case CHESS_GAME_ACTIONS.RESET_STATE: {
      return initialState.chessGamePage;
    }
    case CHESS_GAME_ACTIONS.STATE_LOADED: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default chessGameReducer;
