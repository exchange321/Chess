import React from 'react'


class Room extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let occupied_icon={
            paddingLeft:10,
            color:"green"
        };
        let unoccupied_icon={
            paddingLeft:10,
            color:"gray"
        }

        let iconRender=[];
        if (this.props.player==1) {
            iconRender.push(<i key="icon_1" className="fa fa-user-circle" aria-hidden="true" style={occupied_icon}></i>);
            iconRender.push(<i key="icon_2" className="fa fa-user-circle" aria-hidden="true" style={unoccupied_icon}></i>);
        } else {
            iconRender.push(<i key="icon_1" className="fa fa-user-circle" aria-hidden="true" style={occupied_icon}></i>);
            iconRender.push(<i key="icon_2" className="fa fa-user-circle" aria-hidden="true" style={occupied_icon}></i>);
        }
        
        return (
            <button type="button" className="list-group-item list-group-item-action" onClick={this.joinClick}>
                <div>
                    {this.props.name} - (Status: {this.props.status}) 
                </div>
                {iconRender}
            </button>
        )

    }
    joinClick = (e) => {
        if (this.props.player==2) {
            console.log(this.props.name+" is full. Cannot join");
        } else {
            console.log("Join:"+this.props.name);    
        }
        
    }
}
class RoomList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user_name:"Jason",
            rooms:[
                {id:1,name:"Room 1", player:1,status:"waiting"},
                {id:2,name:"Room 2", player:2,status:"waiting"},
                {id:3,name:"Room 3", player:2,status:"playing"}

            ]

        }
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
                <div style={textStyle}>Hello, {this.state.user_name} !</div>
                <div style={textStyle}>Rooms:</div>
                <div style={roomStyle} className="list-group">
                    {this.state.rooms.map(room => (
                        <Room key={room.id} {...room}/>
                    ))}
                </div>
                <button type="button" className="btn btn-default" onClick={this.createRoomClick}>CREATE ROOM</button>
                
            </div>
        )
    }
    createRoomClick = (e) => {
        console.log("create room click");
    }
}

export default RoomList