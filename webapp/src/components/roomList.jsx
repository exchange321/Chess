import React from 'react'

class RoomList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user_name:"Jason",
            rooms:[
                {name:"Room 1", player:1,status:"waiting"},
                {name:"Room 2", player:2,status:"waiting"},
                {name:"Room 3", player:2,status:"playing"}

            ]

        }
    }
   
    render() {
        let rooms=this.state.rooms;
        var renderRoom=[];
        for (var i=0;i<rooms.length;i++) {
            renderRoom.push(<li key={i} onClick={this.joinRoomClick}>{rooms[i].name} - {rooms[i].player} - {rooms[i].status}</li>);
        }
        return (
            <div>
                <div>Hello, {this.state.user_name} !</div>
                <div>Rooms:</div>
                <div>
                    <ul>
                        {renderRoom}
                    </ul>
                </div>
                <button type="button" className="btn btn-default" onClick={this.createRoomClick}>CREATE ROOM</button>
                
            </div>
        )
    }
    createRoomClick = (e) => {
        console.log("create room click");
    }
    joinRoomClick = (e) => {
        console.log("join room click");
    }
}

export default RoomList