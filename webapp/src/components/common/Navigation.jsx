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

const Sidebar = ({ playerName, lobbyActions }) => (
  <div className="navigation">
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <AppBar
            title={`Welcome, ${playerName}`}
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
    </Switch>
  </div>
);

Sidebar.propTypes = {
  playerName: PropTypes.string.isRequired,
  lobbyActions: PropTypes.shape({
    toggleRoomCreation: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  ({ auth: { playerName } }) => ({
    playerName,
  }),
  dispatch => ({
    lobbyActions: bindActionCreators({
      toggleRoomCreation,
    }, dispatch),
  }),
)(Sidebar);
