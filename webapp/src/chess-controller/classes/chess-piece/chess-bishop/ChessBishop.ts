/**
 * Created by Wayuki on 2017-07-01.
 */
import { BLOCK_COLOR, COORDINATE, FACTION, RAW_COORDINATE, RAW_PIECE } from '../../../helper';
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
    return {
      moves: [],
      offences: [],
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
