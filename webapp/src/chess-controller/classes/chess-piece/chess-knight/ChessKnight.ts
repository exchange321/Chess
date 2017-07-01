/**
 * Created by Wayuki on 2017-07-01.
 */
import { COORDINATE } from '../../../helper';
import IChessPiece from '../../../interfaces/chess-piece/IChessPiece';
import ChessPiece from '../ChessPiece';

class ChessKnight extends ChessPiece implements IChessPiece {

  public getPossibleMoves(): COORDINATE[] {
    return [[1, 1]];
  }

  public validateCoordinate(coordinate?: COORDINATE): boolean {
    return true;
  }
}

export default ChessKnight;