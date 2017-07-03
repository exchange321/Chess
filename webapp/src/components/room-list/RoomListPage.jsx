import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Room from './Room.jsx';

class RoomListPage extends React.Component {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    rooms: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      numPlayer: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    })).isRequired,
  };
  createRoomClick = () => {
// eslint-disable-next-line no-console
    console.log('create room click');
  };

  joinRoomClick = (roomId) => {
// eslint-disable-next-line no-console
    console.log('Join room id = ', roomId);
  };

  render() {
    const roomStyle = {
      padding: 20,
    };
    return (
      <div>
        <div>Hello, {this.props.userName}!</div>
        <div>Rooms:</div>
        <div style={roomStyle} className="list-group">
          {this.props.rooms.map(room => (
            <Room key={room.id} {...room} onClick={this.joinRoomClick} />
          ))}
        </div>
        <button type="button" className="btn btn-default" onClick={this.createRoomClick}>CREATE ROOM</button>
      </div>
    );
  }
}


const mapStateToProps = ({ roomListPage, loginPage: { userName } }) => ({
  ...roomListPage,
  userName,
});

export default connect(mapStateToProps)(RoomListPage);
