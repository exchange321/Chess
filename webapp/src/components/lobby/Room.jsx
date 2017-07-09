import React from 'react';
import PropTypes from 'prop-types';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

// eslint-disable-next-line no-unused-vars
const Room = ({ id, name, owner, numPlayer }) => (
  <TableRow>
    <TableRowColumn>{id}</TableRowColumn>
    <TableRowColumn>{name}</TableRowColumn>
    <TableRowColumn>
      {owner.playerName}
    </TableRowColumn>
    <TableRowColumn>{numPlayer}/2</TableRowColumn>
  </TableRow>
);

Room.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  numPlayer: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    playerId: PropTypes.number.isRequired,
    playerName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Room;
