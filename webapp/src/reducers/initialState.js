import ChessBoard from '../chess-controller/classes/chess-board/ChessBoard.ts';

export default {
  loginPage: {
    isLogin: false,
    userName: 'jason106',
  },
  roomListPage: {
    rooms: [
            { roomId: 1, name: 'Room 1', numPlayer: 1, status: 'Waiting...' },
            { roomId: 2, name: 'Room 2', numPlayer: 2, status: 'Waiting...' },
            { roomId: 3, name: 'Room 3', numPlayer: 2, status: 'Playing...' },
    ],
  },
  roomDetailPage: {
    info: {
      roomId: 1,
      roomName: 'Room 1',

    },
    slots: [
      {
        slotId: 0,
        name: 'player 1',
        isReady: 1,
      },
      {
        slotId: 1,
        name: 'computer insane',
        isReady: 0,
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
