import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import { render } from 'react-dom';

import AppEntry from './AppEntry.jsx';
window.jQuery = window.$=require('jquery');
window.Tether = require('tether');
require('bootstrap');

render(React.createElement(AppEntry), document.querySelector("#app"));