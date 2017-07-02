/**
 * Created by Wayuki on 2017-07-01.
 */
import { COORDINATE, FACTION } from '../../helper';
import IChessMoves from '../../interfaces/chess-piece/IChessMoves';

interface IChessPiece {
  coordinate: COORDINATE;
  faction: FACTION;
  getPossibleMoves: () => IChessMoves;
  validateCoordinate: (coordinate?: COORDINATE) => boolean;
}

export default IChessPiece;
