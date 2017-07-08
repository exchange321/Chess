import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import { toggleIsReady } from '../../actions/roomActions';

const RoomPage = ({ roomId, roomName, players, onReadyClick }) => (
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
      <div>Ready</div>
      <input type="checkbox" checked={players[0].isReady} onChange={() => onReadyClick(0)} />
    </div>
    <div className="form-group">
      <label htmlFor="player2">Player 2:</label>
      <Input type="select" id="player2Select">
        <option>{players[1].playerName}</option>
        <option>Open</option>
        <option>Close</option>
      </Input>
      <div>Ready</div>
      <input type="checkbox" checked={players[1].isReady} onChange={() => onReadyClick(1)} />
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
  onReadyClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({ roomPage }) => ({
  ...roomPage,
});

const mapDispatchToProps = {
  onReadyClick: toggleIsReady,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
