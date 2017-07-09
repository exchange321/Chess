/**
 * Created by Wayuki on 2017-07-01.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { routerActions } from 'react-router-redux';
import RaisedButton from 'material-ui/RaisedButton';
import ChessBoard from './chess-board/ChessBoard.jsx';
import LoadingComponent from '../common/LoadingComponent.jsx';
import { registerPlayers, toggleLeaving, resetState, informStateLoaded } from '../../actions/chessGameActions';
import { generateMatch } from '../../../helpers';

@connect(
  ({
     auth: {
       playerName,
     },
     chessGamePage: {
       leaving,
       player,
       opponent,
       victorious,
       victoriousTeam,
       loading,
     },
  }) => ({
    player: {
      ...player,
      playerName,
    },
    leaving,
    loading,
    opponent,
    victorious,
    victoriousTeam,
  }),
  dispatch => ({
    actions: bindActionCreators({
      registerPlayers,
      toggleLeaving,
      resetState,
      informStateLoaded,
    }, dispatch),
    routerActions: bindActionCreators(routerActions, dispatch),
  }),
)
class ChessGamePage extends Component {
  static propTypes = {
    leaving: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    victorious: PropTypes.bool.isRequired,
    victoriousTeam: PropTypes.string,
    player: PropTypes.shape({
      faction: PropTypes.string.isRequired,
      playerName: PropTypes.string.isRequired,
    }).isRequired,
    opponent: PropTypes.shape({
      playerName: PropTypes.string.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
      registerPlayers: PropTypes.func.isRequired,
      toggleLeaving: PropTypes.func.isRequired,
      resetState: PropTypes.func.isRequired,
      informStateLoaded: PropTypes.func.isRequired,
    }).isRequired,
    routerActions: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };
  static defaultProps = {
    victoriousTeam: null,
  };
  componentWillMount() {
    this.props.actions.resetState();
    generateMatch().then(players => (
      this.props.actions.registerPlayers(players)
    )).then(() => {
      this.props.actions.informStateLoaded();
    });
  }
  componentWillUnmount() {
    this.props.actions.resetState();
  }
  toggleLeaving = () => {
    this.props.actions.toggleLeaving();
  };
  handleConfirmLeaving = () => {
    this.props.actions.toggleLeaving();
    this.leaveGame();
  };
  leaveGame = () => {
    this.props.routerActions.push('/');
  };
  render() {
    const { leaving, loading, player, opponent, victorious, victoriousTeam } = this.props;
    return (
      <div className="chess-game-page container page">
        {
          loading ? <LoadingComponent /> : <ChessBoard />
        }
        <Modal isOpen={victorious} backdrop="static">
          <ModalHeader className="chess-result-modal-header">
            {
              player.faction === victoriousTeam ? 'Victorious' : 'Defeated'
            }
          </ModalHeader>
          <ModalBody>
            <p className="h1 lead text-center">
              {
                `${player.faction === victoriousTeam ? player.playerName : opponent.playerName} Wins`
              }
            </p>
          </ModalBody>
          <ModalFooter>
            <RaisedButton label="Continue" primary onClick={this.leaveGame} />
          </ModalFooter>
        </Modal>
        <Modal isOpen={leaving} toggle={this.toggleLeaving}>
          <ModalHeader toggle={this.toggleLeaving}>
            Quit Game
          </ModalHeader>
          <ModalBody>
            <p className="lead">
              Are you sure you want to leave the game?
            </p>
          </ModalBody>
          <ModalFooter>
            <RaisedButton label="Cancel" onClick={this.toggleLeaving} />
            <RaisedButton label="Confirm" primary onClick={this.handleConfirmLeaving} />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ChessGamePage;

