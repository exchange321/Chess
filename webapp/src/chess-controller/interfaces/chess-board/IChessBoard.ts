/**
 * Created by Wayuki on 2017-07-01.
 */
import IChessMoves from '../chess-piece/IChessMoves';

export interface IChessBoard {
  getPiecePossibleMoves: (pieceId: string) => IChessMoves;
}

export default IChessBoard;
