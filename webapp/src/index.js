import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Promise from 'promise-polyfill';

import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'toastr/build/toastr.min.css';
import './fonts/stylesheet.css';
import './index.scss';

import AppEntry from './AppEntry.jsx'; // eslint-disable-line import/extensions

window.jQuery = window.$ = require('jquery'); // eslint-disable-line no-multi-assign
window.Tether = require('tether');
require('bootstrap');

injectTapEventPlugin();

if (!window.Promise) {
  window.Promise = Promise;
}

render(React.createElement(AppEntry), document.querySelector('#app'));
