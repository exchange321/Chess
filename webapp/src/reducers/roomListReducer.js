import initialState from './initialState';
import { ROOM_LIST_ACTIONS } from '../actions/actionTypes';

const roomListReducer = (state = initialState.roomListPage, action) => {
  switch (action.type) {
    case ROOM_LIST_ACTIONS.ADD_ROOM: {
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

export default roomListReducer;
