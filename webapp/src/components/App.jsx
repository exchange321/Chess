import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './common/Navigation.jsx';
import LoginPage from './login/LoginPage.jsx';
import LobbyPage from './lobby/LobbyPage.jsx';
import RoomPage from './room/RoomPage.jsx';
import ChessGamePage from './chess-game/ChessGamePage.jsx';

import { PageForUserOnly, PageForGuestOnly } from '../auth';

const App = () => (
  <MuiThemeProvider>
    <div className="app-container">
      <Route component={Navigation} />
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={PageForUserOnly(LobbyPage)} />
          <Route exact path="/room" component={RoomPage} />
          <Route exact path="/game" component={ChessGamePage} />
          <Route exact path="/login" component={PageForGuestOnly(LoginPage)} />
        </Switch>
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
