/**
 * Created by chuen on 08-Jul-17.
 */
import { CHESS_GAME_ACTIONS } from './actionTypes';

export const registerMoves = (moves, piece) => ({
  type: CHESS_GAME_ACTIONS.REGISTER_MOVES,
  activePiece: piece,
  moves,
});

export const resetMoves = () => ({
  type: CHESS_GAME_ACTIONS.RESET_MOVES,
});

export const switchTurn = () => ({
  type: CHESS_GAME_ACTIONS.SWITCH_TURN,
});

export const registerVictory = team => ({
  type: CHESS_GAME_ACTIONS.REGISTER_VICTORY,
  team,
});

export const registerChessPieces = pieces => ({
  type: CHESS_GAME_ACTIONS.REGISTER_CHESS_PIECES,
  pieces,
});

export const registerPlayers = players => ({
  type: CHESS_GAME_ACTIONS.REGISTER_PLAYERS,
  players,
});

export const toggleLeaving = () => ({
  type: CHESS_GAME_ACTIONS.TOGGLE_LEAVING,
});

export const resetState = () => ({
  type: CHESS_GAME_ACTIONS.RESET_STATE,
});

export const informStateLoaded = () => ({
  type: CHESS_GAME_ACTIONS.STATE_LOADED,
});

export default () => {};
