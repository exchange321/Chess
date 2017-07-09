import { LOBBY_ACTIONS } from './actionTypes';

export const addRoom = (id, name) => ({
  TYPE: LOBBY_ACTIONS.ADD_ROOM,
  id,
  name,
  player: 1,
  status: 'waiting',
});

export const toggleRoomCreation = () => ({
  type: LOBBY_ACTIONS.TOGGLE_ROOM_CREATION,
});

export const handleFormFieldChange = (key, value) => ({
  type: LOBBY_ACTIONS.HANDLE_FORM_FIELD_CHANGE,
  key,
  value,
});

export default () => { };
