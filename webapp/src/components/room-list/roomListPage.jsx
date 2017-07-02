import React from 'react'
import { connect } from 'react-redux'
import Room from './Room.jsx'

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
                <div>Hello, {this.props.userName}!</div>
                <div>Rooms:</div>
                <div style={roomStyle} className="list-group">
                    {this.props.rooms.map(room => (
                        <Room key={room.id} {...room} onClick={this.joinRoomClick}/>
                    ))}
                </div>
                <button type="button" className="btn btn-default" onClick={this.createRoomClick}>CREATE ROOM</button>
                
            </div>
        )
    }
    createRoomClick = (e) => {
        console.log("create room click");
    }
    
    joinRoomClick = (roomId) => {
        console.log("Join room id = ",roomId);
    }
}


const mapStateToProps = ({ roomListPage, loginPage: { userName } }) => {
  return {
      ...roomListPage,
      userName,
  };
}

export default connect(mapStateToProps)(RoomList)