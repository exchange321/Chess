/**
 * Created by chuen on 09-Jul-17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import { toggleRoomCreation } from '../../actions/lobbyActions';
import { toggleLeaving } from '../../actions/chessGameActions';

const Sidebar = ({ auth, chessGamePage, lobbyActions, chessGameActions }) => (
  <div className="navigation">
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <AppBar
            title={`Welcome, ${auth.playerName}`}
            iconElementLeft={
              <IconButton>
                <FontIcon className="fa fa-users" />
              </IconButton>
            }
            iconElementRight={
              <IconButton onClick={lobbyActions.toggleRoomCreation}>
                <FontIcon className="fa fa-plus" />
              </IconButton>
            }
          />
        )}
      />
      <Route
        exact
        path="/room"
        render={() => (
          <AppBar
            title={`Welcome, ${auth.playerName}`}
            iconElementLeft={
              <IconButton>
                <FontIcon className="fa fa-chevron-left" />
              </IconButton>
            }
          />
        )}
      />
      <Route
        exact
        path="/login"
        render={() => (
          <AppBar
            title="Login"
            iconElementLeft={
              <IconButton>
                <FontIcon className="fa fa-sign-in" />
              </IconButton>
            }
          />
        )}
      />
      <Route
        exact
        path="/game"
        render={() => (
          <AppBar
            title={(!auth.playerName || !chessGamePage.opponent.playerName) ?
              'Loading Players...' :
              `${auth.playerName} vs. ${chessGamePage.opponent.playerName}`
            }
            iconElementLeft={
              <IconButton onClick={chessGameActions.toggleLeaving}>
                <FontIcon className="fa fa-times-circle" />
              </IconButton>
            }
          />
        )}
      />
    </Switch>
  </div>
);

Sidebar.propTypes = {
  auth: PropTypes.shape({
    playerName: PropTypes.string.isRequired,
  }).isRequired,
  chessGamePage: PropTypes.shape({
    player: PropTypes.shape({
      faction: PropTypes.string.isRequired,
    }).isRequired,
    opponent: PropTypes.shape({
      playerName: PropTypes.string.isRequired,
      faction: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  lobbyActions: PropTypes.shape({
    toggleRoomCreation: PropTypes.func.isRequired,
  }).isRequired,
  chessGameActions: PropTypes.shape({
    toggleLeaving: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  ({
     auth: {
       playerName,
     },
    chessGamePage: {
      player,
      opponent,
    },
  }) => ({
    auth: {
      playerName,
    },
    chessGamePage: {
      player,
      opponent,
    },
  }),
  dispatch => ({
    lobbyActions: bindActionCreators({
      toggleRoomCreation,
    }, dispatch),
    chessGameActions: bindActionCreators({
      toggleLeaving,
    }, dispatch),
  }),
)(Sidebar);
