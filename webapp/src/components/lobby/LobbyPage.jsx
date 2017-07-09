import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from '../common/MaterialTextField.jsx';
import Room from './Room.jsx';
import * as lobbyPageActions from '../../actions/lobbyActions';

@connect(
  ({ lobbyPage }) => ({
    ...lobbyPage,
  }),
  dispatch => ({
    actions: bindActionCreators(lobbyPageActions, dispatch),
  }),
)
class LobbyPage extends React.Component {
  static propTypes = {
    roomName: PropTypes.string.isRequired,
    newRoomModal: PropTypes.bool.isRequired,
    rooms: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      numPlayer: PropTypes.number.isRequired,
    })).isRequired,
    actions: PropTypes.shape({
      toggleRoomCreation: PropTypes.func.isRequired,
      handleFormFieldChange: PropTypes.func.isRequired,
    }).isRequired,
  };
  toggleNewRoomModal = () => {
    this.props.actions.toggleRoomCreation();
  };
  handleFormFieldChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.props.actions.handleFormFieldChange(key, value);
  };
  createRoomSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('create a room, name=');
  };

  joinRoomClick = (roomId) => {
    // eslint-disable-next-line no-console
    console.log('Join room id = ', roomId);
  };

  render() {
    return (
      <div className="lobby-page page">
        <div className="lobby-container container">
          <Table>
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Owner</TableHeaderColumn>
                <TableHeaderColumn>Number of player</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.props.rooms.map(room => (
                <Room key={room.id} {...room} />
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="modal-container">
          <Modal isOpen={this.props.newRoomModal} toggle={this.toggleNewRoomModal} className="create-room-modal page">
            <ModalHeader toggle={this.toggleNewRoomModal}>
                Create New Room
            </ModalHeader>
            <ModalBody>
              <form>
                <div className="input-container">
                  <TextField
                    type="text"
                    label="Room Name"
                    name="roomName"
                    value={this.props.roomName}
                    onChange={this.handleFormFieldChange}
                    errors={{}}
                  />
                </div>
                <div className="btn-container text-right">
                  <RaisedButton type="submit" label="Create" primary onClick={this.createRoomSubmit} />
                </div>
              </form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default LobbyPage;
