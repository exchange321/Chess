import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './login/LoginPage.jsx';
import RoomListPage from './room-list/RoomListPage.jsx';

const AppContainer = () => (
  <BrowserRouter>
    <div className="app-container">
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/rooms" component={RoomListPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppContainer;
