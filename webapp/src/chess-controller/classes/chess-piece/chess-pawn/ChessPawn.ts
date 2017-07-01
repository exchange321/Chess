/**
 * Created by Wayuki on 2017-07-01.
 */
import { COORDINATE } from '../../../helper';
import IChessPiece from '../../../interfaces/chess-piece/IChessPiece';
import ChessPiece from '../ChessPiece';

class ChessPawn extends ChessPiece implements IChessPiece {

  public static INVALID_WHITE_PAWN_LOCATION: COORDINATE[] = [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
    [1, 8],
  ];

  public static INVALID_BLACK_PAWN_LOCATION: COORDINATE[] = [
    [8, 1],
    [8, 2],
    [8, 3],
    [8, 4],
    [8, 5],
    [8, 6],
    [8, 7],
    [8, 8],
  ];

  public getPossibleMoves(): COORDINATE[] {
    return [[1, 1]];
  }

  public validateCoordinate(coordinate?: COORDINATE): boolean {
    if (coordinate === undefined) {
      coordinate = this.coordinate;
    }

    switch (this.faction) {
      case 'black': {
        return ChessPawn.INVALID_BLACK_PAWN_LOCATION.includes(coordinate);
      }
      case 'white': {
        return ChessPawn.INVALID_WHITE_PAWN_LOCATION.includes(coordinate);
      }
    }
  }
}

export default ChessPawn;
