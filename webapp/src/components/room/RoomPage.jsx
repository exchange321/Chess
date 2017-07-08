import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { togglePlayer2Ready, player2Join, player2Leave } from '../../actions/roomActions';

const RoomPage = ({ roomId, roomName, isHostRoomPage, players,
  joinClick, toggleReadyClick, leaveClick }) => (
    <div>
      <div>
        <button type="button" className="btn btn-default">
          <span className="glyphicon glyphicon-chevron-left" /> Lobby
      </button>
        <p>Room #{roomId}: {roomName}</p>
      </div>

      <div>
        <div>
          Player 1: {players[0].playerName}
        </div>
        <div>
          Player 2: {players[1].playerName === '' ? 'Open' : players[1].playerName}
        </div>
        <div>
          <button className={players[1].isReady ? 'btn btn-success' : 'btn btn-default'}>{isHostRoomPage ? 'Start' : 'Ready'}</button>
        </div>
      </div>
      <div className="test-buttons">
        <div><br />For test only: <br /></div>
        <div className="row">
          <button className="btn btn-success" onClick={() => joinClick({ playerName: 'jason', playerId: 456 })}>
            Player 2 join</button>
        </div>
        <div className="row">
          <button className="btn btn-success" onClick={() => toggleReadyClick()}>Player 2 toggle ready</button>
        </div>
        <div className="row">
          <button className="btn btn-success" onClick={() => leaveClick()}>Player 2 leave</button>
        </div>
      </div>
    </div>
  );

RoomPage.propTypes = {
  roomId: PropTypes.number.isRequired,
  roomName: PropTypes.string.isRequired,
  isHostRoomPage: PropTypes.bool.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    playerId: PropTypes.number.isRequired,
    playerName: PropTypes.string.isRequired,
    isReady: PropTypes.bool.isRequired,
  })).isRequired,
  joinClick: PropTypes.func.isRequired,
  toggleReadyClick: PropTypes.func.isRequired,
  leaveClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({ roomPage }) => ({
  ...roomPage,
});


const mapDispatchToProps = {
  joinClick: player2Join,
  toggleReadyClick: togglePlayer2Ready,
  leaveClick: player2Leave,
};


export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
