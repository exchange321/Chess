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
    case LOBBY_ACTIONS.TOGGLE_ROOM_CREATION: {
      return {
        ...state,
        newRoomModal: !state.newRoomModal,
      };
    }
    case LOBBY_ACTIONS.HANDLE_FORM_FIELD_CHANGE: {
      return {
        [action.key]: action.value,
      };
    }
    default: {
      return state;
    }
  }
};

export default lobbyReducer;
