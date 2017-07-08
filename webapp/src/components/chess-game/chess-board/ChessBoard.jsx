/**
 * Created by Wayuki on 2017-07-01.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChessBoardCell from './chess-board-cell/ChessBoardCell.jsx';
import ChessBoardClass from '../../../chess-controller/classes/chess-board/ChessBoard.ts';
import ChessPieceClass from '../../../chess-controller/classes/chess-piece/ChessPiece.ts';
import ChessPiece from './chess-piece/ChessPiece.jsx';
import ChessMove from './chess-move/ChessMove.jsx';
import * as chessGameActions from '../../../actions/chessGameActions';

@connect(
  ({ chessGamePage }) => ({
    ...chessGamePage,
  }),
  dispatch => ({
    actions: bindActionCreators(chessGameActions, dispatch),
  }),
)
class ChessBoard extends Component {
  static propTypes = {
    turn: PropTypes.string.isRequired,
    chessBoard: PropTypes.instanceOf(ChessBoardClass).isRequired,
    activePiece: PropTypes.instanceOf(ChessPieceClass),
    showMoves: PropTypes.bool.isRequired,
    moves: PropTypes.shape({
      moves: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number.isRequired)).isRequired,
      offences: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number.isRequired)).isRequired,
    }).isRequired,
    actions: PropTypes.shape({
      registerMoves: PropTypes.func.isRequired,
    }).isRequired,
  };
  static defaultProps = {
    activePiece: null,
  };

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

  handlePieceClick = (piece) => {
    const moves = this.props.chessBoard.getPiecePossibleMoves(piece.id);
    this.props.actions.registerMoves(moves, piece);
  };

  render() {
    const {
      moves,
      chessBoard,
      activePiece,
      turn,
      showMoves,
    } = this.props;
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
            chessBoard.pieces.map(piece => (
              <ChessPiece
                key={piece.id}
                piece={piece}
                turn={turn}
                onPieceClick={this.handlePieceClick}
              />
            )).concat(
              showMoves ? Object.keys(moves).map(moveType => moves[moveType].map(move => (
                <ChessMove
                  piece={activePiece}
                  coordinate={move}
                  moveType={moveType}
                  onPieceClick={() => {}}
                />
              ))) : null,
            )
          }
        </div>
      </div>
    );
  }
}

export default ChessBoard;
