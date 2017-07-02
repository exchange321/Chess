import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {createStore, compose} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'
import AppContainer from './components/AppContainer.jsx'
import initialState from './reducers/initialState'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers();

let store=createStore(
  rootReducer,
  initialState,
  enhancer,
);

const AppEntry = () => (
  <Provider store={store}>
    <AppContainer/>
  </Provider>
);

export default AppEntry;
