/**
 * Created by Wayuki on 2017-07-01.
 */
import {
  arraysHasArray,
  BLOCK_COLOR,
  COORDINATE,
  FACTION,
  isCoordinateInScope,
  RAW_COORDINATE,
  RAW_PIECE,
} from '../../../helper';
import IChessMoves from '../../../interfaces/chess-piece/IChessMoves';
import IChessPiece from '../../../interfaces/chess-piece/IChessPiece';
import ChessPiece from '../ChessPiece';

class ChessBishop extends ChessPiece implements IChessPiece {
  public readonly type: RAW_PIECE = 'bishop';
  private blockColor: BLOCK_COLOR;

  constructor(coordinate: RAW_COORDINATE, faction: FACTION) {
    super(coordinate, faction);
    if (this.coordinate[0] % 2 === this.coordinate[1] % 2) {
      this.blockColor = 'black';
    } else {
      this.blockColor = 'white';
    }
  }

  public getPossibleMoves(pieceCoordinates: COORDINATE[], enemyCoordinates: COORDINATE[]): IChessMoves {
    const moves: COORDINATE[] = [];
    const offences: COORDINATE[] = [];

    for (let i: number = 0; i < 4; i++) {
      for (let j: number = 1; j <= 7; j++) {
        let possibleMove: [number, number];
        switch (i) {
          case 0: {
            possibleMove = [this.coordinate[0] + j, this.coordinate[1] + j];
            break;
          }
          case 1: {
            possibleMove = [this.coordinate[0] + j, this.coordinate[1] - j];
            break;
          }
          case 2: {
            possibleMove = [this.coordinate[0] - j, this.coordinate[1] + j];
            break;
          }
          case 3: {
            possibleMove = [this.coordinate[0] - j, this.coordinate[1] - j];
            break;
          }
        }

        if (isCoordinateInScope(possibleMove)) {
          const move = possibleMove as COORDINATE;
          if (!this.isValidPieceCoordinate(move)) {
            break;
          }
          if (arraysHasArray(enemyCoordinates, move)) {
            offences.push(move);
            break;
          }
          if (!arraysHasArray(pieceCoordinates, move)) {
            moves.push(move);
          } else {
            break;
          }
        } else {
          break;
        }
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

    const coordinateColor: BLOCK_COLOR = (coordinate[0] % 2 === coordinate[1] % 2) ? 'black' : 'white';
    return this.blockColor === coordinateColor;
  }
}

export default ChessBishop;
