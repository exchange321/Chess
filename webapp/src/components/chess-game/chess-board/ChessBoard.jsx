/**
 * Created by Wayuki on 2017-07-01.
 */
import React, { Component } from 'react';
import ChessBoardCell from './chess-board-cell/ChessBoardCell.jsx';
import ChessBoardClass from '../../../chess-controller/classes/chess-board/ChessBoard.ts';
import ChessPiece from './chess-piece/ChessPiece.jsx';

class ChessBoard extends Component {
  state = {
    turn: 'white',
    chessBoard: [],
  };

  componentWillMount() {
    this.setState({
      chessBoard: new ChessBoardClass('normal'),
    });
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

  handlePieceClick = (pieceId) => {
    const moves = this.state.chessBoard.getPiecePossibleMoves(pieceId);
// eslint-disable-next-line no-console
    console.log(moves);
  };

  render() {
    return (
      <div className="chess-board">
        <div className="chess-board-cells">
          {
// eslint-disable-next-line prefer-spread
            Array.apply(null, {
              length: 64,
            }).map((arr, key) => (
              <ChessBoardCell {...this.getPieceProp(key)} />
            ))
          }
        </div>
        <div className="chess-board-pieces">
          {
            this.state.chessBoard.pieces.map(piece => (
              <ChessPiece
                key={piece.id}
                piece={piece}
                turn={this.state.turn}
                onPieceClick={this.handlePieceClick}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default ChessBoard;
