import { COORDINATE, FACTION, RAW_PIECE } from '../../helper/index';
/**
 * Created by chuen on 08-Jul-17.
 */
interface IChessPieceSimp {
  id: string;
  type: RAW_PIECE;
  coordinate: COORDINATE;
  faction: FACTION;
}

export default IChessPieceSimp;
