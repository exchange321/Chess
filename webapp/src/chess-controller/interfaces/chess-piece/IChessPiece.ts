/**
 * Created by Wayuki on 2017-07-01.
 */
import { COORDINATE, RAW_PIECE } from '../../helper';
import IChessPieceSimp from './IChessPieceSimp';
import IChessMoves from '../../interfaces/chess-piece/IChessMoves';

interface IChessPiece extends IChessPieceSimp {
  readonly id: string;
  readonly type: RAW_PIECE;
  getPossibleMoves: (pieceCoordinates: COORDINATE[], enemyCoordinates: COORDINATE[]) => IChessMoves;
  isValidPieceCoordinate: (coordinate?: COORDINATE) => boolean;
}

export default IChessPiece;
