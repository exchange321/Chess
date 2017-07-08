import { LOBBY_ACTIONS } from './actionTypes';

export const addRoom = (id, name) => ({
  TYPE: LOBBY_ACTIONS.ADD_ROOM,
  id,
  name,
  player: 1,
  status: 'waiting',
});

export default () => { };
