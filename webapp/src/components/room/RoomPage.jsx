import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as roomPageActions from '../../actions/roomActions';


const RoomPage = ({ roomId, roomName, isHostRoomPage, players,
  actions }) => (
    <div className="room-page page">
      <div className="room-container container">
        <div className="room-name">Room #{roomId}:{roomName}</div>
        <div className="room-players">
          <div>
            Player 1: {players[0].playerName}
          </div>
          <div>
            Player 2: {players[1].playerName === '' ? 'Open' : players[1].playerName}
          </div>
        </div>
        <div className="room-btn">
          <button className={players[1].isReady ? 'btn btn-success' : 'btn btn-default'}>{isHostRoomPage ? 'Start' : 'Ready'}</button>
        </div>
        <div className="test-buttons">
          <div><br />For test only: <br /></div>
          <div className="row">
            <button className="btn btn-success" onClick={() => actions.player2Join({ playerName: 'jason', playerId: 456 })}>
              Player 2 join</button>
          </div>
          <div className="row">
            <button className="btn btn-success" onClick={() => actions.togglePlayer2Ready()}>Player 2 toggle ready</button>
          </div>
          <div className="row">
            <button className="btn btn-success" onClick={() => actions.player2Leave()}>Player 2 leave</button>
          </div>
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
  actions: PropTypes.shape({
    player2Join: PropTypes.func.isRequired,
    togglePlayer2Ready: PropTypes.func.isRequired,
    player2Leave: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ roomPage }) => ({
  ...roomPage,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(roomPageActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
