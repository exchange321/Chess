import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import { blue500, greenA200 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

// eslint-disable-next-line no-unused-vars
const Room = ({ id, name, owner, numPlayer }) => (
  <div className="room" >
    <div className="name-wrapper" >
      <div className="room-name">{name}</div>
      <div className="owner-name"><strong>Owner:</strong> {owner.playerName}</div>
    </div>
    <div className="icon-btn-wrapper" >
      <div className="join-btn" >
        <RaisedButton
          type="submit"
          label="Join"
          primary
          icon={<FontIcon
            className="fa fa-sign-in"
          />}
          fullWidth
        />
      </div>
      <div className="icon-player">
        <FontIcon
          className="fa fa-user fa-2x"
          color={blue500}
        />
        <FontIcon
          className="fa fa-user fa-2x"
          color={numPlayer === 1 ? greenA200 : blue500}
        />
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
