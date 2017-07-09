/**
 * Created by Wayuki on 2017-07-01.
 */
import React from 'react';
import PropTypes from 'prop-types';

const ChessPiece = ({ piece, onPieceClick, turn, playerFaction }) => (
  <div className={`chess-board-piece-container pos-x-${playerFaction === 'white' ? piece.coordinate[0] : 9 - piece.coordinate[0]} pos-y-${playerFaction === 'white' ? piece.coordinate[1] : 9 - piece.coordinate[1]}`}>
    <div
      role="button"
      tabIndex="-1"
      className={`chess-board-piece chess-${piece.faction} chess-type-${piece.type} ${turn === piece.faction ? 'chess-piece-active' : ''}`}
      onClick={
        turn === piece.faction ?
          () => onPieceClick(piece) :
          () => {}
      }
    />
  </div>
);

ChessPiece.propTypes = {
  piece: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    coordinate: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    faction: PropTypes.string.isRequired,
  }).isRequired,
  onPieceClick: PropTypes.func.isRequired,
  turn: PropTypes.string.isRequired,
  playerFaction: PropTypes.string.isRequired,
};

export default ChessPiece;
