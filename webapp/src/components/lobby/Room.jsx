import React from 'react';
import PropTypes from 'prop-types';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

// eslint-disable-next-line no-unused-vars
const Room = ({ roomId, roomName, owner, numPlayer }) => (
  <TableRow>
    <TableRowColumn>{roomId}</TableRowColumn>
    <TableRowColumn>{roomName}</TableRowColumn>
    <TableRowColumn>
      {owner.playerName}
    </TableRowColumn>
    <TableRowColumn>{numPlayer}/2</TableRowColumn>
  </TableRow>
);

Room.propTypes = {
  roomId: PropTypes.number.isRequired,
  roomName: PropTypes.string.isRequired,
  numPlayer: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    playerId: PropTypes.number.isRequired,
    playerName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Room;
