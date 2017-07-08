import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './store/configureStore';

import AppContainer from './components/App.jsx';

const AppRoutes = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route path="/" component={AppContainer} />
    </div>
  </ConnectedRouter>
);

export default AppRoutes;
