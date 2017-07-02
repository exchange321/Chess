import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Room = ({ id, name, numPlayer, status, onClick }) => (
  <button
    type="button"
    className="list-group-item list-group-item-action"
    onClick={() => onClick(id)}
  >
    <div>
      ID:#{id}: {name} - (Status: {status})
    </div>
    <i key="icon_1" className="fa fa-user-circle" aria-hidden="true" />
    <i key="icon_2" className="fa fa-user-circle" aria-hidden="true" />
  </button>
);

Room.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  numPlayer: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Room;
