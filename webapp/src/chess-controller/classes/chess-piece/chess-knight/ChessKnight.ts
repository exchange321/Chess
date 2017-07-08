/**
 * Created by Wayuki on 2017-07-01.
 */
import { arraysHasArray, COORDINATE, isCoordinateInScope, RAW_PIECE } from '../../../helper';
import IChessMoves from '../../../interfaces/chess-piece/IChessMoves';
import IChessPiece from '../../../interfaces/chess-piece/IChessPiece';
import ChessPiece from '../ChessPiece';

class ChessKnight extends ChessPiece implements IChessPiece {

  public readonly type: RAW_PIECE = 'knight';

  public getPossibleMoves(pieceCoordinates: COORDINATE[], enemyCoordinates: COORDINATE[]): IChessMoves {
    const possibleMoves: Array<[number, number]> = [
      [this.coordinate[0] + 2, this.coordinate[1] + 1],
      [this.coordinate[0] + 1, this.coordinate[1] + 2],
      [this.coordinate[0] - 1, this.coordinate[1] + 2],
      [this.coordinate[0] - 2, this.coordinate[1] + 1],
      [this.coordinate[0] - 2, this.coordinate[1] - 1],
      [this.coordinate[0] - 1, this.coordinate[1] - 2],
      [this.coordinate[0] + 1, this.coordinate[1] - 2],
      [this.coordinate[0] + 2, this.coordinate[1] - 1],
    ];

    const moves: COORDINATE[] = [];
    const offences: COORDINATE[] = [];

    possibleMoves.forEach((possibleMove: [number, number]) => {
      if (isCoordinateInScope(possibleMove)) {
        const move = possibleMove as COORDINATE;
        if (!arraysHasArray(pieceCoordinates, move)) {
          moves.push(move);
        }
        if (arraysHasArray(enemyCoordinates, move)) {
          offences.push(move);
        }
      }
    });

    return {
      moves,
      offences,
    };
  }

  public isValidPieceCoordinate(coordinate?: COORDINATE): boolean {
    return true;
  }
}

export default ChessKnight;
