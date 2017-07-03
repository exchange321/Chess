/**
 * Created by Wayuki on 2017-07-01.
 */
import ChessBishop from '../classes/chess-piece/chess-bishop/ChessBishop';
import ChessKing from '../classes/chess-piece/chess-king/ChessKing';
import ChessKnight from '../classes/chess-piece/chess-knight/ChessKnight';
import ChessPawn from '../classes/chess-piece/chess-pawn/ChessPawn';
import ChessQueen from '../classes/chess-piece/chess-queen/ChessQueen';
import ChessRock from '../classes/chess-piece/chess-rock/ChessRock';
import ChessPiece from '../classes/chess-piece/ChessPiece';
import IModePiece from '../interfaces/mode/IModePiece';
export type RAW_COORDINATE =
  'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6' | 'a7' | 'a8'
  | 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6' | 'b7' | 'b8'
  | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'c7' | 'c8'
  | 'd1' | 'd2' | 'd3' | 'd4' | 'd5' | 'd6' | 'd7' | 'd8'
  | 'e1' | 'e2' | 'e3' | 'e4' | 'e5' | 'e6' | 'e7' | 'e8'
  | 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6' | 'f7' | 'f8'
  | 'g1' | 'g2' | 'g3' | 'g4' | 'g5' | 'g6' | 'g7' | 'g8'
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8';

export type RAW_PIECE = 'pawn' | 'rock' | 'knight' | 'bishop' | 'king' | 'queen';

export type COORDINATE_RANGE = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type COORDINATE = [COORDINATE_RANGE, COORDINATE_RANGE];

export type FACTION = 'black' | 'white';

export type BLOCK_COLOR = 'black' | 'white';

export const initializeChessPiece = (rawPiece: IModePiece): ChessPiece => {
  switch (rawPiece.piece) {
    case 'pawn': {
      return new ChessPawn(rawPiece.coordinate, rawPiece.faction);
    }
    case 'rock': {
      return new ChessRock(rawPiece.coordinate, rawPiece.faction);
    }
    case 'knight': {
      return new ChessKnight(rawPiece.coordinate, rawPiece.faction);
    }
    case 'bishop': {
      return new ChessBishop(rawPiece.coordinate, rawPiece.faction);
    }
    case 'king': {
      return new ChessKing(rawPiece.coordinate, rawPiece.faction);
    }
    case 'queen': {
      return new ChessQueen(rawPiece.coordinate, rawPiece.faction);
    }
  }
};

export const isCoordinateInScope = (coordinate: [number, number]): boolean => {
  return !(coordinate[0] > 8 || coordinate[0] < 1 || coordinate[1] > 8 || coordinate[1] < 1);
};

export const arraysHasArray = (arrays: Array<[number, number]>, target: [number, number]): boolean => {
  for (const array of arrays) {
    if (array[0] === target[0] && array[1] === target[1]) {
      return true;
    }
  }
  return false;
};
