import { ROOM_ACTIONS } from './actionTypes';

export const togglePlayer2Ready = slotId => (
  {
    type: ROOM_ACTIONS.TOGGLE_PLAYER2_READY,
    slotId,
  }
);

export const player2Join = player => (
  {
    type: ROOM_ACTIONS.PLAYER2_JOIN,
    player,
  }
);

export const player2Leave = () => (
  {
    type: ROOM_ACTIONS.PLAYER2_LEAVE,
  }
);
export default () => { };
