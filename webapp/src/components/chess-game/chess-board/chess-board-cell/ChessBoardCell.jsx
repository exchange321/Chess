/**
 * Created by Wayuki on 2017-07-01.
 */
import React from 'react';
import PropTypes from 'prop-types';

const ChessBoardCell = ({ color, coordinate }) => (
  <div className={`chess-board-cell ${color}-cell`} data-row={coordinate[0]} data-col={coordinate[1]} />
);

ChessBoardCell.propTypes = {
  color: PropTypes.string.isRequired,
  coordinate: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default ChessBoardCell;
