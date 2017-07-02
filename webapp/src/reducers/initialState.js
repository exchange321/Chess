const initialState = {
  loginPage: {
    isLogin: false,
    userName: 'jason106',
  },
  roomListPage: {
    rooms: [
      { id: 1, name: 'Room 1', numPlayer: 1, status: 'Waiting...' },
      { id: 2, name: 'Room 2', numPlayer: 2, status: 'Waiting...' },
      { id: 3, name: 'Room 3', numPlayer: 2, status: 'Playing...' },
    ],
  },
};

export default initialState;
