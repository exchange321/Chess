import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Room = ({ id, name, owner, numPlayer }) => (
  <div className="room row" >
    <div className="room-info col-xl-9">
      <div className="row">
        <div className="room-avatar col-xl-2"><div className="avatar-img" /></div>
        <div className="name-wrapper col-xl-10" >
          <div className="room-name"><p>{name}</p></div>
          <div className="owner-name"><p>{owner.playerName}</p></div>
        </div>
      </div>
    </div>
    <div className="icon-btn-wrapper col-xl-3" >
      <div className="icon-player">
        <i className="fa fa-user fa-2x" />
        <i className="fa fa-user fa-2x" />
      </div>
      <div className="join-btn">
        <button className="btn btn-secondary" type="submit">Join</button>
      </div>
    </div>
  </div>
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
