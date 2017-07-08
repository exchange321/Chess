/**
 * Created by Wayuki on 2017-07-01.
 */
import { compareArray, COORDINATE, initializeChessPiece } from '../../helper/';
import ChessPawn from '../chess-piece/chess-pawn/ChessPawn';
import ChessPiece from '../chess-piece/ChessPiece';
import ChessKing from '../chess-piece/chess-king/ChessKing';
import IChessBoard from '../../interfaces/chess-board/IChessBoard';
import IChessMoves from '../../interfaces/chess-piece/IChessMoves';
import IModePiece from '../../interfaces/mode/IModePiece';
import normalMode from '../../modes/normalMode.json';

class ChessBoard implements IChessBoard {
  public pieces: ChessPiece[];
  private readonly mode: 'normal';

  constructor(mode: 'normal') {
    this.mode = mode;
    this.pieces = this.initializeChessBoard();
  }

  public getPiecePossibleMoves(pieceId: string): IChessMoves {
    const target = this.pieces.filter((piece) => piece.id === pieceId)[0];
    return target.getPossibleMoves(
      this.pieces.map((piece) => piece.coordinate),
      this.pieces.filter((piece) => piece.faction !== target.faction).map((piece) => piece.coordinate),
    );
  }

  public movePiece(pieceId: string, location: COORDINATE): void {
    const target = this.pieces.filter((piece) => piece.id === pieceId)[0];
    target.coordinate = location;
    if (target instanceof ChessPawn) {
      target.registerPawnMoved();
    }
    this.pieces = this.pieces.filter((piece) => !compareArray(piece.coordinate, location) && !(piece.id === pieceId));
    this.pieces.push(target);
  }

  public checkVictory(): number {
    const kings: ChessPiece[] = this.pieces.filter((piece) => piece instanceof ChessKing);
    if (kings.length === 2) {
      return 0;
    }
    if (kings[0].faction === 'white') {
      return 1;
    }
    return 2;
  }

  private initializeChessBoard(): ChessPiece[] {
    switch (this.mode) {
      case 'normal':
      default: {
        const rawPieces = normalMode as IModePiece[];
        return rawPieces.map((rawPiece) => initializeChessPiece(rawPiece));
      }
    }
  }

}

export default ChessBoard;
