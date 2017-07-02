import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Login from './components/login.jsx';
import RoomList from './components/roomList.jsx';
import ChessGamePage from './components/chess-game/ChessGamePage.jsx';


const AppEntry = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/rooms" component={RoomList} />
      <Route path="/chess" component={ChessGamePage} />
    </div>
  </HashRouter>
);

export default AppEntry;
