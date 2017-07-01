/**
 * Created by Wayuki on 2017-07-01.
 */
import React, { Component } from 'react';
import ChessBoardCell from './chess-board-cell/ChessBoardCell.jsx';
import ChessBoardClass from '../../../chess-controller/classes/chess-board/ChessBoard.ts';

class ChessBoard extends Component {
  constructor(props) {
    super(props);
    this.chessBoard = new ChessBoardClass('normal');
    console.log(this.chessBoard.pieces);
  }

  getPieceProp = (val) => {
    const row = 8 - Math.floor(val / 8);
    const col = (val % 8) + 1;
    const prop = {
      key: `${row}${col}`,
      coordinate: [row, col],
    };
    if (row % 2 === 0) {
      if (col % 2 === 0) {
        prop.color = 'black';
      } else {
        prop.color = 'white';
      }
    } else {
// eslint-disable-next-line no-lonely-if
      if (col % 2 === 0) {
        prop.color = 'white';
      } else {
        prop.color = 'black';
      }
    }
    return prop;
  };

  render() {
    return (
      <div className="chess-board">
        {
// eslint-disable-next-line prefer-spread
          Array.apply(null, {
            length: 64,
          }).map((arr, key) => (
            <ChessBoardCell {...this.getPieceProp(key)} />
          ))
        }
      </div>
    );
  }
}

export default ChessBoard;
