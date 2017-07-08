import ChessBoard from '../chess-controller/classes/chess-board/ChessBoard.ts';

export default {
  loginPage: {
    isLogin: false,
    userName: 'jason106',
  },
  lobbyPage: {
    rooms: [
      { roomId: 1, roomName: 'Room 1', numPlayer: 1, owner: { playerId: 123, playerName: 'deep blue' } },
      { roomId: 2, roomName: 'Room 2', numPlayer: 2, owner: { playerId: 123, playerName: 'john' } },
      { roomId: 3, roomName: 'Room 3', numPlayer: 2, owner: { playerId: 123, playerName: 'black_mage' } },
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
  chessGamePage: {
    victorious: false,
    victoriousTeam: null,
    chessBoard: new ChessBoard('normal'),
    pieces: [],
    activePiece: null,
    showMoves: false,
    turn: 'white',
    moves: {
      moves: [],
      offences: [],
    },
  },
};
