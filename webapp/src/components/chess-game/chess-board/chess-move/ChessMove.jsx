/**
 * Created by chuen on 08-Jul-17.
 */
import React from 'react';
import PropTypes from 'prop-types';

const ChessMove = ({ piece, coordinate, moveType, onPieceClick, playerFaction }) => (
  <div className={`chess-board-piece-container pos-x-${playerFaction === 'white' ? coordinate[0] : 9 - coordinate[0]} pos-y-${playerFaction === 'white' ? coordinate[1] : 9 - coordinate[1]}`}>
    <div
      role="button"
      tabIndex="-1"
      className={`chess-board-piece chess-${piece.faction} chess-type-${piece.type} chess-move-${moveType} chess-piece-active`}
      onClick={() => onPieceClick(piece.id, coordinate)}
    />
  </div>
);

ChessMove.propTypes = {
  piece: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    coordinate: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    faction: PropTypes.string.isRequired,
  }).isRequired,
  coordinate: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  moveType: PropTypes.string.isRequired,
  onPieceClick: PropTypes.func.isRequired,
  playerFaction: PropTypes.string.isRequired,
};

export default ChessMove;
