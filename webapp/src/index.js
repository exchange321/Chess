import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
<<<<<<< HEAD
import "./index.css";
=======
>>>>>>> 7d3d1ea... add redux partly

import React from 'react'
import { render } from 'react-dom';

import AppEntry from './AppEntry.jsx';
window.jQuery = window.$=require('jquery');
window.Tether = require('tether');
require('bootstrap');

injectTapEventPlugin();

render(React.createElement(AppEntry), document.querySelector("#app"));