import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Login from './components/login.jsx';
import RoomList from './components/roomList.jsx';


const AppEntry = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/rooms" component={RoomList} />
    </div>
  </HashRouter>

);

export default AppEntry;
