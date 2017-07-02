/**
 * Created by Wayuki on 2017-07-01.
 */
import { COORDINATE, FACTION, RAW_COORDINATE, RAW_PIECE } from '../../helper';
import IChessMoves from '../../interfaces/chess-piece/IChessMoves';
import IChessPiece from '../../interfaces/chess-piece/IChessPiece';

abstract class ChessPiece implements IChessPiece {

  public readonly id: string = ((+new Date()) + Math.random() * 100).toString(32);
  public abstract readonly type: RAW_PIECE;
  public coordinate: COORDINATE;
  public faction: FACTION;

  constructor(coordinate: RAW_COORDINATE, faction: FACTION) {
    let yAxis: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    switch (coordinate[0]) {
      case 'a': {
        yAxis = 1;
        break;
      }
      case 'b': {
        yAxis = 2;
        break;
      }
      case 'c': {
        yAxis = 3;
        break;
      }
      case 'd': {
        yAxis = 4;
        break;
      }
      case 'e': {
        yAxis = 5;
        break;
      }
      case 'f': {
        yAxis = 6;
        break;
      }
      case 'g': {
        yAxis = 7;
        break;
      }
      case 'h': {
        yAxis = 8;
        break;
      }
    }
    const xAxis = parseInt(coordinate[1], 10) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    this.coordinate = [yAxis, xAxis];
    this.faction = faction;
  }

  public abstract getPossibleMoves(): IChessMoves;

  public abstract validateCoordinate(coordinate?: COORDINATE): boolean;
}

export default ChessPiece;
