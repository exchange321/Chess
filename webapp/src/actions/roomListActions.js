import { ROOM_LIST_ACTIONS } from './actionTypes';

export const addRoom = (id, name) => ({
  TYPE: ROOM_LIST_ACTIONS.ADD_ROOM,
  id,
  name,
  player: 1,
  status: 'waiting',
});

export default () => {};
