/**
 * Created by Wayuki on 2017-07-01.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChessBoardCell from './chess-board-cell/ChessBoardCell.jsx';
import ChessBoardClass from '../../../chess-controller/classes/chess-board/ChessBoard.ts';
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
    pieces: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      coordinate: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      faction: PropTypes.string.isRequired,
    })).isRequired,
    activePiece: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      coordinate: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      faction: PropTypes.string.isRequired,
    }),
    showMoves: PropTypes.bool.isRequired,
    moves: PropTypes.shape({
      moves: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number.isRequired)).isRequired,
      offences: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number.isRequired)).isRequired,
    }).isRequired,
    actions: PropTypes.shape({
      registerMoves: PropTypes.func.isRequired,
      resetMoves: PropTypes.func.isRequired,
      switchTurn: PropTypes.func.isRequired,
      registerVictory: PropTypes.func.isRequired,
      registerChessPieces: PropTypes.func.isRequired,
    }).isRequired,
  };
  static defaultProps = {
    activePiece: null,
  };

  componentWillMount() {
    this.registerPieces();
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
  registerPieces = () => {
    this.props.actions.registerChessPieces(this.props.chessBoard.getPieces());
  };

  handlePieceClick = (piece) => {
    const moves = this.props.chessBoard.getPiecePossibleMoves(piece.id);
    this.props.actions.registerMoves(moves, piece);
  };
  handlePieceMove = (pieceId, location) => {
    const {
      chessBoard,
      actions: {
        resetMoves,
        switchTurn,
        registerVictory,
      },
    } = this.props;
    chessBoard.movePiece(pieceId, location);
    this.registerPieces(chessBoard.getPieces());
    resetMoves();
    switchTurn();
    switch (chessBoard.checkVictory()) {
      case 1: {
        registerVictory('white');
        break;
      }
      case 2: {
        registerVictory('black');
        break;
      }
      default: {
        break;
      }
    }
  };

  render() {
    const {
      moves,
      pieces,
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
            pieces.map(piece => (
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
                  onPieceClick={this.handlePieceMove}
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
