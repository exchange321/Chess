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

export default () => {};
