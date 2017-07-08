import initialState from './initialState';
import { LOBBY_ACTIONS } from '../actions/actionTypes';

const lobbyReducer = (state = initialState.lobbyPage, action) => {
  switch (action.type) {
    case LOBBY_ACTIONS.ADD_ROOM: {
      return Object.assign({}, state, {
        rooms: [
          ...state.rooms,
          {
            id: action.id,
            name: action.name,
            numPlayer: action.numPlayer,
            status: action.status,
          },
        ],
      });
    }
    default: {
      return state;
    }
  }
};

export default lobbyReducer;
