/**
 * Created by Wayuki on 2017-07-01.
 */
import {arraysHasArray, COORDINATE, COORDINATE_RANGE, isCoordinateInScope, RAW_PIECE} from '../../../helper';
import IChessMoves from '../../../interfaces/chess-piece/IChessMoves';
import IChessPiece from '../../../interfaces/chess-piece/IChessPiece';
import ChessPiece from '../ChessPiece';

class ChessPawn extends ChessPiece implements IChessPiece {

  private moved: boolean = false;

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

  public readonly type: RAW_PIECE = 'pawn';

  public getPossibleMoves(pieceCoordinates: COORDINATE[], enemyCoordinates: COORDINATE[]): IChessMoves {
    const xAxis: COORDINATE_RANGE = this.coordinate[0];
    const yAxis: COORDINATE_RANGE = this.coordinate[1];

    const moves: COORDINATE[] = [];
    const offences: COORDINATE[] = [];

    const step = this.moved ? 1 : 2;

    switch (this.faction) {
      case 'white': {
        for (let i = 1; i <= step; i++) {
          const possibleMove: [number, number] = [xAxis, yAxis + i];
          if (isCoordinateInScope(possibleMove)) {
            const move = possibleMove as COORDINATE;
            if (this.isValidPieceCoordinate(move) && !arraysHasArray(pieceCoordinates, move)) {
              moves.push(move);
              continue;
            }
          }
          break;
        }
        [-1, 1].forEach((val) => {
          const possibleOffence: [number, number] = [xAxis + val, yAxis + 1];
          if (isCoordinateInScope(possibleOffence)) {
            const offence = possibleOffence as COORDINATE;
            if (this.isValidPieceCoordinate(offence) && arraysHasArray(enemyCoordinates, offence)) {
              offences.push(offence);
            }
          }
        });
        break;
      }
      case 'black': {
        for (let i = 1; i <= step; i++) {
          const possibleMove: [number, number] = [xAxis, yAxis - i];
          if (isCoordinateInScope(possibleMove)) {
            const move = possibleMove as COORDINATE;
            if (this.isValidPieceCoordinate(move) && !arraysHasArray(pieceCoordinates, move)) {
              moves.push(move);
              continue;
            }
          }
          break;
        }
        [-1, 1].forEach((val) => {
          const possibleOffence: [number, number] = [xAxis + val, yAxis - 1];
          if (isCoordinateInScope(possibleOffence)) {
            const offence = possibleOffence as COORDINATE;
            if (this.isValidPieceCoordinate(offence) && arraysHasArray(enemyCoordinates, offence)) {
              offences.push(offence);
            }
          }
        });
        break;
      }
    }

    return {
      moves,
      offences,
    };
  }

  public isValidPieceCoordinate(coordinate?: COORDINATE): boolean {
    if (coordinate === undefined) {
      coordinate = this.coordinate;
    }

    switch (this.faction) {
      case 'black': {
        return !ChessPawn.INVALID_BLACK_PAWN_LOCATION.includes(coordinate);
      }
      case 'white': {
        return !ChessPawn.INVALID_WHITE_PAWN_LOCATION.includes(coordinate);
      }
    }
  }

  public registerPawnMoved(): void {
    this.moved = true;
  }
}

export default ChessPawn;
