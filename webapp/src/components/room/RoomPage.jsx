import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Label } from 'reactstrap';

const RoomPage = ({ roomId, roomName, players }) => (
  <form>
    <div className="form-group">
      <label htmlFor="roomId">RoomID: #{roomId}</label>
    </div>
    <div className="form-group">
      <label htmlFor="roomName">Room Name: {roomName}</label>
    </div>
    <div className="form-group">
      <label htmlFor="player1">Player 1:</label>
      <Input type="select" id="player1Select">
        <option>{players[0].playerName}</option>
      </Input>
      <Label check>
        <Input type="checkbox" defaultChecked={players[0].isReady} />{' '}
        Ready
        </Label>
    </div>
    <div className="form-group">
      <label htmlFor="player2">Player 2:</label>
      <Input type="select" id="player2Select">
        <option>{players[1].playerName}</option>
        <option>Open</option>
        <option>Close</option>
      </Input>
      <Label check>
        <Input type="checkbox" defaultChecked={players[1].isReady} />{' '}
        Ready
        </Label>
    </div>
    <button className="btn btn-success">Start!</button>
  </form>
);

RoomPage.propTypes = {
  roomId: PropTypes.number.isRequired,
  roomName: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    playerId: PropTypes.number.isRequired,
    playerName: PropTypes.string.isRequired,
    isReady: PropTypes.bool.isRequired,
  })).isRequired,
};

const mapStateToProps = ({ roomPage }) => ({
  ...roomPage,
});

export default connect(mapStateToProps)(RoomPage);
