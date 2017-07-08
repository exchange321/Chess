import initialState from './initialState';
import { ROOM_ACTIONS } from '../actions/actionTypes';

const roomReducer = (state = initialState.roomPage, action) => {
  switch (action.type) {
    case ROOM_ACTIONS.TOGGLE_IS_READY: {
      const newPlayers = Object.assign({}, state.players);
      newPlayers[action.slotId].isReady = !newPlayers[action.slotId].isReady;
      return Object.assign({}, state, {
        players: newPlayers,
      });
    }
    default:
      return state;
  }
};
export default roomReducer;
