import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'

import AppContainer from './components/AppContainer.jsx'

let store=createStore(rootReducer, [])

const AppEntry = () => (
  <Provider store={store}>
    <AppContainer/>
  </Provider>
);

export default AppEntry;
