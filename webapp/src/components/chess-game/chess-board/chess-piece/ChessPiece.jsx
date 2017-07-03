/**
 * Created by Wayuki on 2017-07-01.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ChessPieceClass from '../../../../chess-controller/classes/chess-piece/ChessPiece.ts';

const ChessPiece = ({ piece, onPieceClick, turn }) => (
  <div className={`chess-board-piece-container pos-x-${piece.coordinate[0]} pos-y-${piece.coordinate[1]}`}>
    <div
      role="button"
      tabIndex="-1"
      className={`chess-board-piece chess-${piece.faction} chess-type-${piece.type} ${turn === piece.faction ? 'chess-piece-active' : ''}`}
      onClick={
        turn === piece.faction ?
          () => onPieceClick(piece.id) :
          () => onPieceClick(piece.id)
      }
    />
  </div>
);

ChessPiece.propTypes = {
  piece: PropTypes.instanceOf(ChessPieceClass).isRequired,
  onPieceClick: PropTypes.func.isRequired,
  turn: PropTypes.string.isRequired,
};

export default ChessPiece;
