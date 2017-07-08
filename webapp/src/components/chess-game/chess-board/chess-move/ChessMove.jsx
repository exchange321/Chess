/**
 * Created by chuen on 08-Jul-17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ChessPieceClass from '../../../../chess-controller/classes/chess-piece/ChessPiece.ts';

const ChessMove = ({ piece, coordinate, moveType, onPieceClick }) => (
  <div className={`chess-board-piece-container pos-x-${coordinate[0]} pos-y-${coordinate[1]}`}>
    <div
      role="button"
      tabIndex="-1"
      className={`chess-board-piece chess-${piece.faction} chess-type-${piece.type} chess-move-${moveType} chess-piece-active`}
      onClick={() => onPieceClick()}
    />
  </div>
);

ChessMove.propTypes = {
  piece: PropTypes.instanceOf(ChessPieceClass).isRequired,
  coordinate: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  moveType: PropTypes.string.isRequired,
  onPieceClick: PropTypes.func.isRequired,
};

export default ChessMove;
