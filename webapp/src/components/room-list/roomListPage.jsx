import React from 'react'
import { connect } from 'react-redux'

class RoomList extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        let textStyle={
            fontSize:"32px",
            fontFamily:"monospace",
            padding:10
        }
        let roomStyle = {
            padding:20
        }
        return (
            <div>
                <div>Hello, {this.props.user_name} !</div>
                <div>Rooms:</div>
                <div style={roomStyle} className="list-group">
                    {this.props.rooms.map(room => (
                        <Room key={room.id} {...room} onClick={this.joinRoomClick(room.id) }/>
                    ))}
                </div>
                <button type="button" className="btn btn-default" onClick={this.createRoomClick}>CREATE ROOM</button>
                
            </div>
        )
    }
    createRoomClick = (e) => {
        console.log("create room click");
    }
    joinRoomClick = (roomId) = {
        console.log("Join room id = ",roomId);
    }
}


const mapStateToProps = ({ roomListPage }) => {
  return ...roomListPage;
}

const VisibleRooms = connect(
  mapStateToProps,
  null
)(RoomList)

export default VisibleRooms