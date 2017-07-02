/**
 * Created by Wayuki on 2017-07-01.
 */
import { COORDINATE, RAW_PIECE } from '../../../helper';
import IChessMoves from '../../../interfaces/chess-piece/IChessMoves';
import IChessPiece from '../../../interfaces/chess-piece/IChessPiece';
import ChessPiece from '../ChessPiece';

class ChessKing extends ChessPiece implements IChessPiece {

  public readonly type: RAW_PIECE = 'king';

  public getPossibleMoves(): IChessMoves {
    return {
      moves: [],
      offences: [],
    };
  }

  public validateCoordinate(coordinate?: COORDINATE): boolean {
    return true;
  }
}

export default ChessKing;
