import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import LoginPage from './login/LoginPage.jsx';
import LobbyPage from './lobby/LobbyPage.jsx';
import RoomPage from './room/RoomPage.jsx';
import ChessGamePage from './chess-game/ChessGamePage.jsx';

import { PageForUserOnly, PageForGuestOnly } from '../auth';

const App = () => (
  <MuiThemeProvider>
    <div className="app-container">
      <div className="navigation">
        <AppBar
          title="Login"
          iconElementLeft={
            <IconButton>
              <ExitToApp />
            </IconButton>
          }
        />
      </div>
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={PageForUserOnly(LobbyPage)} />
          <Route exact path="/room" component={PageForUserOnly(RoomPage)} />
          <Route exact path="/game" component={PageForUserOnly(ChessGamePage)} />
          <Route exact path="/login" component={PageForGuestOnly(LoginPage)} />
        </Switch>
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
