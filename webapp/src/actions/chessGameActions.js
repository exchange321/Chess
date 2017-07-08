/**
 * Created by chuen on 08-Jul-17.
 */
import { CHESS_GAME_ACTIONS } from './actionTypes';

export const registerMoves = (moves, piece) => ({
  type: CHESS_GAME_ACTIONS.REGISTER_MOVES,
  activePiece: piece,
  moves,
});

export default () => {};
