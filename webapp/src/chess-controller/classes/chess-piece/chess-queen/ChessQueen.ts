/**
 * Created by Wayuki on 2017-07-01.
 */
import { arraysHasArray, COORDINATE, isCoordinateInScope, RAW_PIECE } from '../../../helper';
import IChessMoves from '../../../interfaces/chess-piece/IChessMoves';
import IChessPiece from '../../../interfaces/chess-piece/IChessPiece';
import ChessPiece from '../ChessPiece';

class ChessQueen extends ChessPiece implements IChessPiece {

  public readonly type: RAW_PIECE = 'queen';

  public getPossibleMoves(pieceCoordinates: COORDINATE[], enemyCoordinates: COORDINATE[]): IChessMoves {
    const moves: COORDINATE[] = [];
    const offences: COORDINATE[] = [];

    for (let i: number = 0; i < 8; i++) {
      for (let j: number = 1; j <= 7; j++) {
        let possibleMove: [number, number];
        switch (i) {
          case 0: {
            possibleMove = [this.coordinate[0] + j, this.coordinate[1]];
            break;
          }
          case 1: {
            possibleMove = [this.coordinate[0] + j, this.coordinate[1] + j];
            break;
          }
          case 2: {
            possibleMove = [this.coordinate[0], this.coordinate[1] + j];
            break;
          }
          case 3: {
            possibleMove = [this.coordinate[0] - j, this.coordinate[1] + j];
            break;
          }
          case 4: {
            possibleMove = [this.coordinate[0] - j, this.coordinate[1]];
            break;
          }
          case 5: {
            possibleMove = [this.coordinate[0] - j, this.coordinate[1] - j];
            break;
          }
          case 6: {
            possibleMove = [this.coordinate[0], this.coordinate[1] - j];
            break;
          }
          case 7: {
            possibleMove = [this.coordinate[0] + j, this.coordinate[1] - j];
            break;
          }
        }

        if (isCoordinateInScope(possibleMove)) {
          const move = possibleMove as COORDINATE;
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
    return true;
  }
}

export default ChessQueen;
