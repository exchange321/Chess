import { ROOM_ACTIONS } from './actionTypes';

export const toggleIsReady = slotId => (
  {
    type: ROOM_ACTIONS.TOGGLE_IS_READY,
    slotId,
  }
);
export default () => { };
