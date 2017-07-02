export const addRoom = (id, name) => ({
  TYPE: 'ADD_ROOM',
  id,
  name,
  player: 1,
  status: 'waiting',
});

export default () => {};
