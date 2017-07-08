import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './login/LoginPage.jsx';
import LobbyPage from './lobby/LobbyPage.jsx';
import RoomPage from './room/RoomPage.jsx';
import ChessGamePage from './chess-game/ChessGamePage.jsx';

const App = () => (
  <div className="app-container">
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/lobby" component={LobbyPage} />
        <Route exact path="/room" component={RoomPage} />
        <Route exact path="/game" component={ChessGamePage} />
      </Switch>
    </div>
  </div>
);

export default App;
