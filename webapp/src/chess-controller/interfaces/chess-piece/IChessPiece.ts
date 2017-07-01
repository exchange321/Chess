/**
 * Created by Wayuki on 2017-07-01.
 */
import { COORDINATE, FACTION } from '../../helper';

interface IChessPiece {
  coordinate: COORDINATE;
  faction: FACTION;
  getPossibleMoves: () => COORDINATE[];
  validateCoordinate: (coordinate?: COORDINATE) => boolean;
}

export default IChessPiece;
