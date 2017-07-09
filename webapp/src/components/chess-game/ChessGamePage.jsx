/**
 * Created by Wayuki on 2017-07-01.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import ChessBoard from './chess-board/ChessBoard.jsx';

@connect(
  ({ chessGamePage: { victorious, victoriousTeam } }) => ({
    victorious,
    victoriousTeam,
  }),
)
class ChessGamePage extends Component {
  static propTypes = {
    victorious: PropTypes.bool.isRequired,
    victoriousTeam: PropTypes.string,
  };
  static defaultProps = {
    victoriousTeam: null,
  };
  render() {
    const { victorious, victoriousTeam } = this.props;
    return (
      <div className="chess-game-page page">
        <ChessBoard />
        <Modal isOpen={victorious} backdrop="static">
          <ModalBody>
            {
              `${victoriousTeam && victoriousTeam.charAt(0).toUpperCase() + victoriousTeam.slice(1)} Wins`
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {}}>Continue</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ChessGamePage;

