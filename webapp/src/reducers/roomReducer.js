import initialState from './initialState';
import { ROOM_ACTIONS } from '../actions/actionTypes';

const roomReducer = (state = initialState.roomPage, action) => {
  switch (action.type) {
    case ROOM_ACTIONS.TOGGLE_PLAYER2_READY: {
      return {
        ...state,
        players: state.players.map((player, key) => {
          if (key === 1 && player.playerName !== '') {
            return {
              ...player,
              isReady: !player.isReady,
            };
          }
          return player;
        }),
      };
    }
    case ROOM_ACTIONS.PLAYER2_JOIN: {
      return {
        ...state,
        players: state.players.map((player, key) => {
          if (key === 1) {
            return {
              ...action.player,
              isReady: false,
            };
          }
          return player;
        }),
      };
    }
    case ROOM_ACTIONS.PLAYER2_LEAVE: {
      return {
        ...state,
        players: state.players.map((player, key) => {
          if (key === 1) {
            return {
              playerName: '',
              playerId: -1,
              isReady: false,
            };
          }
          return player;
        }),
      };
    }
    default:
      return state;
  }
};
export default roomReducer;
