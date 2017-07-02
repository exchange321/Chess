import React from 'react'
import { Col,Label,Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; 
import { connect } from 'react-redux'
import Room from './Room.jsx'

class RoomList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
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
                <button type="button" className="btn btn-default" onClick={this.toggleModal}>CREATE ROOM</button>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="create-room-modal">
                    <ModalHeader toggle={this.toggle}>Create a room</ModalHeader>
                    <ModalBody>
                        <Label sm={40}>Enter a name:</Label>
                        <Col sm={10}>
                            <Input type="text" name="Enter a name:" id="roomName" placeholder="Room 1" />
                        </Col>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.createRoomClick}>Create a room</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                
            </div>
        )
    }
    toggleModal = (e) => {
        //toggle the modal
        this.setState({
            modal: !this.state.modal
        });
    }
    createRoomClick=(e) => {
        console.log("create a room, name=");

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