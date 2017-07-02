/**
 * Created by Wayuki on 2017-07-01.
 */
import {COORDINATE, COORDINATE_RANGE, isValidCoordinate, RAW_PIECE} from '../../../helper';
import IChessMoves from '../../../interfaces/chess-piece/IChessMoves';
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

  public readonly type: RAW_PIECE = 'pawn';

  public getPossibleMoves(): IChessMoves {
    const xAxis: COORDINATE_RANGE = this.coordinate[0];
    const yAxis: COORDINATE_RANGE = this.coordinate[1];

    const possibleMoves: Array<[number, number]> = [];
    const possibleOffences: Array<[number, number]> = [];

    switch (this.faction) {
      case 'white': {
        possibleMoves.push([xAxis, yAxis + 1]);
        possibleMoves.push([xAxis, yAxis + 2]);
        possibleOffences.push([xAxis - 1, yAxis + 1]);
        possibleOffences.push([xAxis + 1, yAxis + 1]);
        break;
      }
      case 'black': {
        possibleMoves.push([xAxis, yAxis - 1]);
        possibleMoves.push([xAxis, yAxis - 2]);
        possibleOffences.push([xAxis - 1, yAxis - 1]);
        possibleOffences.push([xAxis + 1, yAxis - 1]);
        break;
      }
    }

    return {
      moves: possibleMoves.filter((move) => isValidCoordinate(move)) as COORDINATE[],
      offences: possibleOffences.filter((offence) => isValidCoordinate(offence)) as COORDINATE[],
    };
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
