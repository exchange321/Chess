export default {
  loginPage: {
    isLogin: false,
    userName: 'jason106',
  },
  lobbyPage: {
    rooms: [
      { roomId: 1, name: 'Room 1', numPlayer: 1, status: 'Waiting...' },
      { roomId: 2, name: 'Room 2', numPlayer: 2, status: 'Waiting...' },
      { roomId: 3, name: 'Room 3', numPlayer: 2, status: 'Playing...' },
    ],
  },
  roomPage: {
    roomId: 1,
    roomName: 'Room 1',
    isHostRoomPage: true,
    players: [
      {
        playerName: 'Wayuki',
        playerId: 123,
        isReady: true,
      },
      {
        playerName: '',
        playerId: -1,
        isReady: false,
      },
    ],

  },
};
